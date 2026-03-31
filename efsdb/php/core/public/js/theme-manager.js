(function () {
  var storageKey = 'efsdb-theme';
  var themeSelector = '[data-theme-toggle]';
  var componentSelector =
    'efsdb-login, efsdb-explorer, efsdb-admin, efsdb-builder';

  function normalizeTheme(value) {
    return value === 'light' || value === 'green' ? value : 'dark';
  }

  function readTheme() {
    try {
      return normalizeTheme(localStorage.getItem(storageKey) || 'light');
    } catch (error) {
      return normalizeTheme(document.documentElement.dataset.theme || 'light');
    }
  }

  function syncToggle(theme) {
    document.querySelectorAll(themeSelector).forEach(function (button) {
      button.setAttribute('data-theme-current', theme);

      var isLight = theme === 'light';
      var isGreen = theme === 'green';

      button.setAttribute('aria-pressed', isLight ? 'true' : 'false');

      var nextTitle = 'Switch to dark mode';
      if (theme === 'dark') nextTitle = 'Switch to green mode';
      if (theme === 'green') nextTitle = 'Switch to light mode';

      button.setAttribute('title', nextTitle);
    });
  }

  function syncComponents(theme) {
    document.querySelectorAll(componentSelector).forEach(function (element) {
      element.setAttribute('theme', theme);
    });
  }

  function applyTheme(theme) {
    var nextTheme = normalizeTheme(theme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;

    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch (error) {}

    syncToggle(nextTheme);
    syncComponents(nextTheme);
    window.dispatchEvent(
      new CustomEvent('efsdb-themechange', { detail: { theme: nextTheme } })
    );
    return nextTheme;
  }

  function toggleTheme() {
    var current = normalizeTheme(
      document.documentElement.dataset.theme || readTheme()
    );
    var next = 'dark';
    if (current === 'light') next = 'dark';
    else if (current === 'dark') next = 'green';
    else if (current === 'green') next = 'light';

    return applyTheme(next);
  }

  document.addEventListener('click', function (event) {
    var target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    var button = target.closest(themeSelector);
    if (!button) {
      return;
    }

    event.preventDefault();
    toggleTheme();
  });

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'data-theme'
      ) {
        syncComponents(
          normalizeTheme(document.documentElement.dataset.theme || readTheme())
        );
      }
    });
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

  window.setEfsdbTheme = applyTheme;
  window.getEfsdbTheme = function () {
    return normalizeTheme(document.documentElement.dataset.theme || readTheme());
  };

  applyTheme(document.documentElement.dataset.theme || readTheme());
})();
