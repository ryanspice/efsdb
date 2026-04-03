(function () {
  var storageKey = 'efsdb-theme';
  var themeStudioStorageKey = 'efsdb:theme-studio';
  var themeSelector = '[data-theme-toggle]';
  var componentSelector =
    'efsdb-login, efsdb-explorer, efsdb-admin, efsdb-admin-dock, efsdb-builder';
  var themeStudioVarNames = [
    '--accent',
    '--accent-strong',
    '--accent-soft',
    '--accent-secondary',
    '--accent-secondary-soft',
    '--surface',
    '--surface-alt',
    '--surface-inset',
    '--border',
    '--border-strong',
    '--text',
    '--text-muted',
    '--on-accent',
    '--on-secondary',
    '--focus',
    '--success',
    '--warning',
    '--danger',
    '--theme-shadow',
    '--efs-state-success',
    '--efs-state-warning',
    '--efs-state-danger',
    '--shell-primary',
    '--shell-primary-strong',
    '--shell-primary-soft',
    '--shell-body-bg',
    '--shell-overlay',
    '--shell-overlay-opacity',
    '--shell-panel-bg',
    '--shell-panel-solid',
    '--shell-panel-solid-subtle',
    '--shell-panel-solid-muted',
    '--shell-panel',
    '--shell-surface',
    '--shell-soft-bg',
    '--shell-inset-bg',
    '--shell-inset-strong-bg',
    '--shell-nav-bg',
    '--shell-hover-bg',
    '--shell-row-hover',
    '--shell-code-bg',
    '--shell-pre-bg',
    '--shell-input-bg',
    '--shell-input-placeholder',
    '--shell-shadow',
    '--shell-pill-text',
    '--shell-nav-text',
    '--shell-code-text',
    '--shell-chip-bg',
    '--shell-scrollbar',
    '--shell-border',
    '--shell-border-strong',
    '--shell-text',
    '--shell-text-strong',
    '--shell-muted'
  ];

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

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

  function hexToRgb(hex) {
    if (typeof hex !== 'string') {
      return null;
    }

    var normalized = hex.trim().replace('#', '');
    if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
      return null;
    }

    var value = parseInt(normalized, 16);
    return {
      r: (value >> 16) & 255,
      g: (value >> 8) & 255,
      b: value & 255
    };
  }

  function rgbToHex(r, g, b) {
    var value =
      (clamp(Math.round(r), 0, 255) << 16) |
      (clamp(Math.round(g), 0, 255) << 8) |
      clamp(Math.round(b), 0, 255);

    return '#' + value.toString(16).padStart(6, '0');
  }

  function normalizeHex(input) {
    var value = typeof input === 'string' ? input.trim().replace('#', '') : '';

    if (/^[0-9a-fA-F]{3}$/.test(value)) {
      return (
        '#' +
        value
          .split('')
          .map(function (part) {
            return (part + part).toLowerCase();
          })
          .join('')
      );
    }

    if (/^[0-9a-fA-F]{6}$/.test(value)) {
      return '#' + value.toLowerCase();
    }

    return '#5b8cff';
  }

  function rgbToHsl(r, g, b) {
    var rr = r / 255;
    var gg = g / 255;
    var bb = b / 255;
    var max = Math.max(rr, gg, bb);
    var min = Math.min(rr, gg, bb);
    var delta = max - min;
    var h = 0;
    var l = (max + min) / 2;
    var s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    if (delta !== 0) {
      switch (max) {
        case rr:
          h = ((gg - bb) / delta) % 6;
          break;
        case gg:
          h = (bb - rr) / delta + 2;
          break;
        default:
          h = (rr - gg) / delta + 4;
          break;
      }

      h *= 60;
      if (h < 0) h += 360;
    }

    return {
      h: h,
      s: s * 100,
      l: l * 100
    };
  }

  function hslToRgb(h, s, l) {
    var hh = ((h % 360) + 360) % 360;
    var ss = clamp(s, 0, 100) / 100;
    var ll = clamp(l, 0, 100) / 100;
    var c = (1 - Math.abs(2 * ll - 1)) * ss;
    var x = c * (1 - Math.abs(((hh / 60) % 2) - 1));
    var m = ll - c / 2;
    var rPrime = 0;
    var gPrime = 0;
    var bPrime = 0;

    if (hh < 60) {
      rPrime = c;
      gPrime = x;
    } else if (hh < 120) {
      rPrime = x;
      gPrime = c;
    } else if (hh < 180) {
      gPrime = c;
      bPrime = x;
    } else if (hh < 240) {
      gPrime = x;
      bPrime = c;
    } else if (hh < 300) {
      rPrime = x;
      bPrime = c;
    } else {
      rPrime = c;
      bPrime = x;
    }

    return {
      r: (rPrime + m) * 255,
      g: (gPrime + m) * 255,
      b: (bPrime + m) * 255
    };
  }

  function hslToHex(h, s, l) {
    var rgb = hslToRgb(h, s, l);
    return rgbToHex(rgb.r, rgb.g, rgb.b);
  }

  function luminance(hex) {
    var rgb = hexToRgb(hex);
    if (!rgb) {
      return 0;
    }

    var values = [rgb.r, rgb.g, rgb.b].map(function (value) {
      var normalized = value / 255;
      return normalized <= 0.03928
        ? normalized / 12.92
        : Math.pow((normalized + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * values[0] + 0.7152 * values[1] + 0.0722 * values[2];
  }

  function contrastRatio(a, b) {
    var la = luminance(a);
    var lb = luminance(b);
    var lighter = Math.max(la, lb);
    var darker = Math.min(la, lb);

    return (lighter + 0.05) / (darker + 0.05);
  }

  function readableOn(background, preferredLight, preferredDark) {
    var light = preferredLight || '#f8fbff';
    var dark = preferredDark || '#08111f';
    return contrastRatio(background, light) >= contrastRatio(background, dark) ? light : dark;
  }

  function scale(value, fromMin, fromMax, toMin, toMax) {
    var ratio = (value - fromMin) / (fromMax - fromMin);
    return toMin + ratio * (toMax - toMin);
  }

  function mixHex(a, b, weightOfB) {
    var left = hexToRgb(a);
    var right = hexToRgb(b);
    var weight = clamp(weightOfB, 0, 1);

    if (!left || !right) {
      return typeof a === 'string' ? a : typeof b === 'string' ? b : '#5b8cff';
    }

    return rgbToHex(
      left.r + (right.r - left.r) * weight,
      left.g + (right.g - left.g) * weight,
      left.b + (right.b - left.b) * weight
    );
  }

  function rgbaFromHex(hex, alpha) {
    var rgb = hexToRgb(hex);
    var opacity = clamp(alpha, 0, 1).toFixed(3);

    if (!rgb) {
      return 'rgba(0, 0, 0, ' + opacity + ')';
    }

    return 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + opacity + ')';
  }

  function isThemeStudioPalette(value) {
    return Boolean(
      value &&
        typeof value === 'object' &&
        typeof value.accent === 'string' &&
        typeof value.surface === 'string' &&
        typeof value.surfaceAlt === 'string' &&
        typeof value.surfaceInset === 'string' &&
        typeof value.border === 'string' &&
        typeof value.text === 'string'
    );
  }

  function buildThemeStudioPalette(seedInput, mode, vividness, contrast) {
    var seed = normalizeHex(seedInput);
    var rgb = hexToRgb(seed);
    if (!rgb) {
      rgb = hexToRgb('#5b8cff');
    }

    var hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    var isDark = mode === 'dark';
    var vividShift = scale(vividness, 0, 100, -16, 18);
    var contrastShift = scale(contrast, 0, 100, -12, 14);
    var accent = seed;
    var accentStrong = hslToHex(
      hsl.h,
      clamp(hsl.s + 6 + vividShift * 0.5, 18, 98),
      clamp(hsl.l + (isDark ? 10 : -12) - contrastShift * 0.2, 16, 78)
    );
    var accentSoft = mixHex(accent, isDark ? '#0b1220' : '#ffffff', isDark ? 0.74 : 0.82);
    var accentSecondary = hslToHex(
      hsl.h + 30,
      clamp(hsl.s * 0.84 + vividShift * 0.45, 18, 90),
      clamp(hsl.l + (isDark ? 4 : -3), 18, 72)
    );
    var accentSecondarySoft = mixHex(
      accentSecondary,
      isDark ? '#0b1220' : '#ffffff',
      isDark ? 0.76 : 0.84
    );
    var surface = hslToHex(
      hsl.h + 2,
      clamp(8 + hsl.s * 0.08, 6, 18),
      isDark ? clamp(10 + contrastShift * 0.34, 7, 18) : clamp(98 - contrastShift * 0.24, 93, 99)
    );
    var surfaceAlt = hslToHex(
      hsl.h + 8,
      clamp(10 + hsl.s * 0.1, 7, 20),
      isDark ? clamp(14 + contrastShift * 0.38, 10, 23) : clamp(95 - contrastShift * 0.18, 90, 97)
    );
    var surfaceInset = hslToHex(
      hsl.h,
      clamp(8 + hsl.s * 0.06, 5, 16),
      isDark ? clamp(8 + contrastShift * 0.24, 5, 14) : clamp(92 - contrastShift * 0.18, 88, 95)
    );
    var border = mixHex(surfaceAlt, accent, isDark ? 0.18 : 0.1);
    var borderStrong = mixHex(border, accentStrong, 0.32);
    var text = isDark ? '#e6eefc' : '#0f172a';
    var textMuted = isDark ? mixHex(text, surface, 0.45) : mixHex(text, surface, 0.58);
    var focus = mixHex(accent, isDark ? '#ffffff' : '#0f172a', isDark ? 0.18 : 0.1);
    var success = isDark ? '#3ddc97' : '#138a5b';
    var warning = isDark ? '#f6b73c' : '#b66a00';
    var danger = isDark ? '#ff6b81' : '#c92a4b';
    var onAccent = readableOn(accent);
    var onSecondary = readableOn(accentSecondary);
    var shadow = isDark
      ? '0 18px 60px rgba(0, 0, 0, 0.44), 0 6px 20px rgba(0, 0, 0, 0.28)'
      : '0 18px 60px rgba(15, 23, 42, 0.16), 0 6px 20px rgba(15, 23, 42, 0.08)';

    return {
      seed: seed,
      mode: isDark ? 'dark' : 'light',
      vividness: clamp(Math.round(vividness), 0, 100),
      contrast: clamp(Math.round(contrast), 0, 100),
      accent: accent,
      accentStrong: accentStrong,
      accentSoft: accentSoft,
      accentSecondary: accentSecondary,
      accentSecondarySoft: accentSecondarySoft,
      surface: surface,
      surfaceAlt: surfaceAlt,
      surfaceInset: surfaceInset,
      border: border,
      borderStrong: borderStrong,
      text: text,
      textMuted: textMuted,
      onAccent: onAccent,
      onSecondary: onSecondary,
      focus: focus,
      success: success,
      warning: warning,
      danger: danger,
      shadow: shadow
    };
  }

  function buildThemeStudioVars(palette) {
    var isDark = palette.mode === 'dark';
    var shellBodyBg = isDark
      ? 'radial-gradient(circle at top left, ' +
        rgbaFromHex(palette.accent, 0.14) +
        ', transparent 28%), linear-gradient(180deg, ' +
        mixHex(palette.surface, '#08111f', 0.28) +
        ' 0%, ' +
        mixHex(palette.surfaceInset, '#020617', 0.46) +
        ' 100%)'
      : 'radial-gradient(circle at top left, ' +
        rgbaFromHex(palette.accent, 0.1) +
        ', transparent 26%), linear-gradient(180deg, ' +
        mixHex(palette.surfaceAlt, '#ffffff', 0.34) +
        ' 0%, ' +
        mixHex(palette.surface, '#ffffff', 0.14) +
        ' 100%)';
    var shellOverlay = isDark
      ? 'radial-gradient(circle at 12% 18%, transparent 0 118px, ' +
        rgbaFromHex(palette.accent, 0.08) +
        ' 119px 120px, transparent 121px), radial-gradient(circle at 78% 22%, transparent 0 184px, ' +
        rgbaFromHex(palette.accentSecondary, 0.06) +
        ' 185px 186px, transparent 187px)'
      : 'radial-gradient(circle at 18% 16%, transparent 0 126px, ' +
        rgbaFromHex(palette.accent, 0.06) +
        ' 127px 128px, transparent 129px), radial-gradient(circle at 82% 18%, transparent 0 168px, ' +
        rgbaFromHex(palette.accentSecondary, 0.05) +
        ' 169px 170px, transparent 171px)';
    var shellPanelBg = isDark ? rgbaFromHex(palette.surface, 0.9) : rgbaFromHex(palette.surface, 0.94);
    var shellSoftBg = mixHex(palette.surfaceAlt, palette.accentSoft, isDark ? 0.18 : 0.24);
    var shellInsetBg = mixHex(palette.surfaceInset, palette.accentSoft, isDark ? 0.1 : 0.14);
    var shellInsetStrongBg = mixHex(shellInsetBg, palette.borderStrong, isDark ? 0.26 : 0.22);
    var shellNavBg = isDark
      ? rgbaFromHex(mixHex(palette.surface, palette.accentSoft, 0.12), 0.88)
      : rgbaFromHex(mixHex(palette.surface, palette.accentSoft, 0.18), 0.94);
    var shellHoverBg = mixHex(palette.surfaceAlt, palette.accentSoft, isDark ? 0.3 : 0.42);
    var shellCodeBg = mixHex(palette.surfaceInset, palette.accentSoft, isDark ? 0.14 : 0.18);
    var shellPreBg = mixHex(palette.surfaceInset, isDark ? '#020617' : '#ffffff', isDark ? 0.28 : 0.2);
    var shellInputBg = isDark
      ? rgbaFromHex(mixHex(palette.surface, '#020617', 0.18), 0.86)
      : rgbaFromHex(mixHex(palette.surface, '#ffffff', 0.2), 0.96);
    var shellChipBg = mixHex(palette.surfaceAlt, palette.accentSoft, isDark ? 0.24 : 0.28);
    var shellScrollbar = rgbaFromHex(palette.text, isDark ? 0.2 : 0.16);

    return {
      '--accent': palette.accent,
      '--accent-strong': palette.accentStrong,
      '--accent-soft': palette.accentSoft,
      '--accent-secondary': palette.accentSecondary,
      '--accent-secondary-soft': palette.accentSecondarySoft,
      '--surface': palette.surface,
      '--surface-alt': palette.surfaceAlt,
      '--surface-inset': palette.surfaceInset,
      '--border': palette.border,
      '--border-strong': palette.borderStrong,
      '--text': palette.text,
      '--text-muted': palette.textMuted,
      '--on-accent': palette.onAccent,
      '--on-secondary': palette.onSecondary,
      '--focus': palette.focus,
      '--success': palette.success,
      '--warning': palette.warning,
      '--danger': palette.danger,
      '--theme-shadow': palette.shadow,
      '--efs-state-success': palette.success,
      '--efs-state-warning': palette.warning,
      '--efs-state-danger': palette.danger,
      '--shell-primary': palette.accent,
      '--shell-primary-strong': palette.accentStrong,
      '--shell-primary-soft': palette.accentSoft,
      '--shell-body-bg': shellBodyBg,
      '--shell-overlay': shellOverlay,
      '--shell-overlay-opacity': isDark ? '0.76' : '0.54',
      '--shell-panel-bg': shellPanelBg,
      '--shell-panel-solid': palette.surface,
      '--shell-panel-solid-subtle': palette.surfaceAlt,
      '--shell-panel-solid-muted': palette.surfaceInset,
      '--shell-panel': palette.surface,
      '--shell-surface': palette.surfaceAlt,
      '--shell-soft-bg': shellSoftBg,
      '--shell-inset-bg': shellInsetBg,
      '--shell-inset-strong-bg': shellInsetStrongBg,
      '--shell-nav-bg': shellNavBg,
      '--shell-hover-bg': shellHoverBg,
      '--shell-row-hover': shellHoverBg,
      '--shell-code-bg': shellCodeBg,
      '--shell-pre-bg': shellPreBg,
      '--shell-input-bg': shellInputBg,
      '--shell-input-placeholder': palette.textMuted,
      '--shell-shadow': palette.shadow,
      '--shell-pill-text': palette.onAccent,
      '--shell-nav-text': palette.textMuted,
      '--shell-code-text': palette.text,
      '--shell-chip-bg': shellChipBg,
      '--shell-scrollbar': shellScrollbar,
      '--shell-border': palette.border,
      '--shell-border-strong': palette.borderStrong,
      '--shell-text': palette.text,
      '--shell-text-strong': palette.text,
      '--shell-muted': palette.textMuted
    };
  }

  function collectAccessibleWindows(startWindow) {
    if (!startWindow) {
      return [];
    }

    var queue = [startWindow];
    var visited = [];

    while (queue.length > 0) {
      var currentWindow = queue.shift();
      if (!currentWindow || visited.indexOf(currentWindow) !== -1) {
        continue;
      }

      visited.push(currentWindow);

      try {
        var parentWindow = currentWindow.parent;
        if (parentWindow && parentWindow !== currentWindow && visited.indexOf(parentWindow) === -1) {
          queue.push(parentWindow);
        }
      } catch (error) {}

      try {
        for (var index = 0; index < currentWindow.frames.length; index += 1) {
          var frameWindow = currentWindow.frames.item(index);
          if (frameWindow && visited.indexOf(frameWindow) === -1) {
            queue.push(frameWindow);
          }
        }
      } catch (error) {}
    }

    return visited;
  }

  function readThemeStudioState(preferredMode) {
    try {
      var raw = localStorage.getItem(themeStudioStorageKey);
      if (!raw) {
        return null;
      }

      var parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        var seed = normalizeHex(
          parsed.seed ||
            (parsed.palette && typeof parsed.palette.seed === 'string' ? parsed.palette.seed : null)
        );
        var vividness = clamp(Number(parsed.vividness), 0, 100);
        if (!Number.isFinite(vividness)) vividness = 66;
        var contrast = clamp(Number(parsed.contrast), 0, 100);
        if (!Number.isFinite(contrast)) contrast = 56;
        var mode =
          preferredMode === 'dark' || preferredMode === 'light'
            ? preferredMode
            : parsed.mode === 'dark'
              ? 'dark'
              : 'light';
        var palette = buildThemeStudioPalette(seed, mode, vividness, contrast);

        return {
          seed: seed,
          mode: mode,
          vividness: vividness,
          contrast: contrast,
          palette: palette,
          lastAppliedAt: typeof parsed.lastAppliedAt === 'number' ? parsed.lastAppliedAt : null
        };
      }
    } catch (error) {}

    return null;
  }

  function writeThemeStudioState(nextState) {
    if (!nextState || typeof nextState !== 'object') {
      return;
    }

    try {
      var serialized = JSON.stringify(nextState);
      if (localStorage.getItem(themeStudioStorageKey) !== serialized) {
        localStorage.setItem(themeStudioStorageKey, serialized);
      }
    } catch (error) {}
  }

  function clearThemeStudioPaletteForDocument(targetDocument) {
    if (!targetDocument || !targetDocument.documentElement) {
      return;
    }

    var rootStyle = targetDocument.documentElement.style;

    themeStudioVarNames.forEach(function (name) {
      rootStyle.removeProperty(name);
    });
    delete targetDocument.documentElement.dataset.themeMode;
  }

  function clearThemeStudioPalette() {
    clearThemeStudioPaletteForDocument(document);
  }

  function applyThemeStudioPaletteForDocument(targetDocument, palette, shouldDispatch) {
    if (!targetDocument || !targetDocument.documentElement) {
      return false;
    }

    if (!isThemeStudioPalette(palette)) {
      clearThemeStudioPaletteForDocument(targetDocument);
      return false;
    }

    var rootStyle = targetDocument.documentElement.style;
    var vars = buildThemeStudioVars(palette);

    Object.keys(vars).forEach(function (name) {
      rootStyle.setProperty(name, vars[name]);
    });
    targetDocument.documentElement.dataset.themeMode = palette.mode === 'dark' ? 'dark' : 'light';
    targetDocument.documentElement.dataset.theme = palette.mode === 'dark' ? 'dark' : 'light';
    targetDocument.documentElement.style.colorScheme = palette.mode === 'dark' ? 'dark' : 'light';

    if (shouldDispatch && targetDocument.defaultView) {
      try {
        targetDocument.defaultView.dispatchEvent(
          new targetDocument.defaultView.CustomEvent('efsdb-theme-palettechange', {
            detail: { palette: palette }
          })
        );
      } catch (error) {}
    }

    return true;
  }

  function applyThemeStudioPalette(palette) {
    return applyThemeStudioPaletteForDocument(document, palette, true);
  }

  function syncThemeStudioPalette() {
    var state = readThemeStudioState(resolveTheme(readThemeSetting()));
    if (!state) {
      clearThemeStudioPalette();
      return false;
    }

    writeThemeStudioState(state);
    return applyThemeStudioPalette(state.palette);
  }

  function applyTheme(setting) {
    if (!isValidTheme(setting)) setting = 'auto';
    var resolvedTheme = resolveTheme(setting);
    var state = readThemeStudioState(resolvedTheme);
    var palette = state ? state.palette : null;

    document.documentElement.dataset.themeSetting = setting;
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.style.colorScheme = resolvedTheme;

    try {
      if (localStorage.getItem(storageKey) !== setting) {
        localStorage.setItem(storageKey, setting);
      }
    } catch (error) {}

    if (state) {
      writeThemeStudioState({
        seed: state.seed,
        mode: resolvedTheme,
        vividness: state.vividness,
        contrast: state.contrast,
        palette: palette,
        lastAppliedAt: typeof state.lastAppliedAt === 'number' ? state.lastAppliedAt : Date.now()
      });
    }

    var rootWindow = window;
    try {
      rootWindow = window.top || window;
    } catch (error) {}

    collectAccessibleWindows(rootWindow).forEach(function (targetWindow) {
      try {
        targetWindow.document.documentElement.dataset.themeSetting = setting;
        targetWindow.document.documentElement.dataset.theme = resolvedTheme;
        targetWindow.document.documentElement.style.colorScheme = resolvedTheme;

        if (palette) {
          applyThemeStudioPaletteForDocument(targetWindow.document, palette, false);
        } else {
          clearThemeStudioPaletteForDocument(targetWindow.document);
        }

        if (palette) {
          targetWindow.dispatchEvent(
            new targetWindow.CustomEvent('efsdb-theme-palettechange', {
              detail: { palette: palette }
            })
          );
        }

        targetWindow.dispatchEvent(
          new targetWindow.CustomEvent('efsdb-themechange', {
            detail: { theme: resolvedTheme, setting: setting }
          })
        );
      } catch (error) {}
    });

    syncToggle(setting, resolvedTheme);
    syncComponents(resolvedTheme);
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

  document.addEventListener('efsdb:theme-studio:applied', function (event) {
    var detail = event && event.detail;
    if (detail && detail.palette) {
      applyTheme(detail.palette.mode === 'dark' ? 'dark' : 'light');
    }
  });

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

  window.addEventListener('storage', function (event) {
    if (event.key === storageKey) {
      applyTheme(readThemeSetting());
      return;
    }

    if (event.key === themeStudioStorageKey) {
      applyTheme(readThemeSetting());
    }
  });

  window.setEfsdbTheme = applyTheme;
  window.getEfsdbTheme = function () {
    return resolveTheme(readThemeSetting());
  };
  window.getEfsdbThemeSetting = function() {
    return readThemeSetting();
  };

  applyTheme(readThemeSetting());
})();
