(function () {
  var storageKey = 'efsdb-theme';
  var themeSelector = '[data-theme-toggle]';
  var componentSelector = 'efsdb-login, efsdb-explorer';

  function normalizeTheme(value) {
    return value === 'light' ? 'light' : 'dark';
  }

  function readTheme() {
    try {
      return normalizeTheme(localStorage.getItem(storageKey));
    } catch (error) {
      return normalizeTheme(document.documentElement.dataset.theme);
    }
  }

  function syncToggle(theme) {
    document.querySelectorAll(themeSelector).forEach(function (button) {
      button.setAttribute('data-theme-current', theme);
      button.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
      button.setAttribute('title', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
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
    } catch (error) {
    }

    syncToggle(nextTheme);
    syncComponents(nextTheme);
    window.dispatchEvent(new CustomEvent('efsdb-themechange', { detail: { theme: nextTheme } }));
    return nextTheme;
  }

  function toggleTheme() {
    var current = normalizeTheme(document.documentElement.dataset.theme || readTheme());
    return applyTheme(current === 'light' ? 'dark' : 'light');
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

  var observer = new MutationObserver(function () {
    syncComponents(normalizeTheme(document.documentElement.dataset.theme || readTheme()));
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });

  window.setEfsdbTheme = applyTheme;
  window.getEfsdbTheme = function () {
    return normalizeTheme(document.documentElement.dataset.theme || readTheme());
  };

  applyTheme(document.documentElement.dataset.theme || readTheme());
})();
