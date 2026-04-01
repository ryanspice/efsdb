(function () {
  var storageKey = 'efsdb-theme';
  var themeSelector = '[data-theme-toggle]';
  var componentSelector =
    'efsdb-login, efsdb-explorer, efsdb-admin, efsdb-builder';

  function isValidTheme(value) {
    return value === 'light' || value === 'dark' || value === 'auto';
  }

  function getSystemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function resolveTheme(value) {
    if (value === 'auto') {
      return getSystemTheme();
    }
    return value === 'light' ? 'light' : 'dark';
  }

  function readThemeSetting() {
    try {
      var stored = localStorage.getItem(storageKey);
      if (isValidTheme(stored)) return stored;
    } catch (error) {}
    
    var docTheme = document.documentElement.dataset.themeSetting;
    if (isValidTheme(docTheme)) return docTheme;
    
    return 'auto';
  }

  function syncToggle(setting, resolvedTheme) {
    document.querySelectorAll(themeSelector).forEach(function (button) {
      button.setAttribute('data-theme-current', setting);

      var isLight = resolvedTheme === 'light';

      button.setAttribute('aria-pressed', isLight ? 'true' : 'false');

      var nextTitle = 'Switch to dark mode';
      if (setting === 'dark') nextTitle = 'Switch to auto mode';
      if (setting === 'auto') nextTitle = 'Switch to light mode';

      button.setAttribute('title', nextTitle);
    });
  }

  function syncComponents(theme) {
    document.querySelectorAll(componentSelector).forEach(function (element) {
      element.setAttribute('theme', theme);
    });
  }

  function applyTheme(setting) {
    if (!isValidTheme(setting)) setting = 'auto';
    var resolvedTheme = resolveTheme(setting);
    
    document.documentElement.dataset.themeSetting = setting;
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.style.colorScheme = resolvedTheme;

    try {
      localStorage.setItem(storageKey, setting);
    } catch (error) {}

    syncToggle(setting, resolvedTheme);
    syncComponents(resolvedTheme);
    window.dispatchEvent(
      new CustomEvent('efsdb-themechange', { detail: { theme: resolvedTheme, setting: setting } })
    );
    return setting;
  }

  function toggleTheme() {
    var current = readThemeSetting();
    var next = 'dark';
    if (current === 'light') next = 'dark';
    else if (current === 'dark') next = 'auto';
    else if (current === 'auto') next = 'light';

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

  // Keep observing dataset.theme for backward compatibility, but we now drive it from JS
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'data-theme'
      ) {
        var docTheme = document.documentElement.dataset.theme;
        syncComponents(docTheme);
      }
    });
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
      if (readThemeSetting() === 'auto') {
        applyTheme('auto');
      }
    });
  }

  window.setEfsdbTheme = applyTheme;
  window.getEfsdbTheme = function () {
    return resolveTheme(readThemeSetting());
  };
  window.getEfsdbThemeSetting = function() {
    return readThemeSetting();
  };

  applyTheme(readThemeSetting());
})();
