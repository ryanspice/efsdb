type AppIconCategory = 'widget' | 'toolbar' | 'window' | 'action';
type AppIconVariantTone = 'signature' | 'popular' | 'classic';

export type AppIconVariant = {
  id: string;
  label: string;
  tone: AppIconVariantTone;
  svg: string;
};

export type AppIconDefinition = {
  id: string;
  label: string;
  category: AppIconCategory;
  defaultVariant: string;
  variants: Record<string, AppIconVariant>;
};

const svg = (body: string, viewBox = '0 0 20 20') =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" aria-hidden="true">${body}</svg>`;

const stroke = (body: string, width = '1.5') =>
  `<g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="${width}">${body}</g>`;

const fill = (body: string) => `<g fill="#000">${body}</g>`;

export const APP_ICON_CATALOG = {
  'create-user': {
    id: 'create-user',
    label: 'Create user',
    category: 'widget',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Studio add user',
        tone: 'signature',
        svg: svg(
          stroke(
            '<path d="M10 4.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"/><path d="M5 14.75a5 5 0 0 1 10 0"/><path d="M15.5 6.25v3.5"/><path d="M13.75 8h3.5"/>'
          )
        )
      },
      rounded: {
        id: 'rounded',
        label: 'Rounded badge',
        tone: 'popular',
        svg: svg(
          stroke(
            '<path d="M10 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M5.25 15a4.75 4.75 0 0 1 9.5 0"/><path d="M15 4.75h1.5v1.5h1.5v1.5h-1.5v1.5H15v-1.5h-1.5v-1.5H15z"/>'
          )
        )
      },
      classic: {
        id: 'classic',
        label: 'Classic account add',
        tone: 'classic',
        svg: svg(
          `${fill('<path d="M10 4.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Zm0 5.6c-2.6 0-4.7 1.38-5.25 3.4h10.5c-.55-2.02-2.65-3.4-5.25-3.4Z"/>')} ${stroke(
            '<path d="M15.25 4.75v4.5"/><path d="M13 7h4.5"/>',
            '1.35'
          )}`
        )
      }
    }
  },
  'user-directory': {
    id: 'user-directory',
    label: 'User directory',
    category: 'widget',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Dual profile',
        tone: 'signature',
        svg: svg(
          stroke(
            '<path d="M6.75 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M13.25 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Z"/><path d="M3.75 15a3 3 0 0 1 6 0"/><path d="M10.25 15a3 3 0 0 1 6 0"/>',
            '1.45'
          )
        )
      },
      roster: {
        id: 'roster',
        label: 'Roster grid',
        tone: 'popular',
        svg: svg(
          stroke(
            '<path d="M6.25 5.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Z"/><path d="M13.75 5.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Z"/><path d="M4.5 14.5a2.5 2.5 0 0 1 3.5-2.3 2.5 2.5 0 0 1 3.5 0 2.5 2.5 0 0 1 3.5 2.3"/>',
            '1.45'
          )
        )
      }
    }
  },
  'create-role': {
    id: 'create-role',
    label: 'Create role',
    category: 'widget',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Role composer',
        tone: 'signature',
        svg: svg(
          stroke(
            '<path d="M5.5 6.25h9"/><path d="M5.5 10h6.5"/><path d="M5.5 13.75h9"/><path d="M13.75 3.75v5"/><path d="M11.25 6.25h5"/>',
            '1.55'
          )
        )
      },
      badge: {
        id: 'badge',
        label: 'Badge plus',
        tone: 'popular',
        svg: svg(
          stroke(
            '<path d="M6 5.5h7.5"/><path d="M6 9.5h5.5"/><path d="M6 13.5h7.5"/><path d="M13.75 8.5a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"/><path d="M13.75 3.75v3.5"/><path d="M12 5.5h3.5"/>',
            '1.45'
          )
        )
      }
    }
  },
  'role-directory': {
    id: 'role-directory',
    label: 'Role directory',
    category: 'widget',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Role catalog',
        tone: 'signature',
        svg: svg(
          stroke(
            '<path d="M4.75 5.5h10.5v9H4.75z"/><path d="M7.25 8.25h5.5"/><path d="M7.25 11.75h5.5"/>',
            '1.45'
          )
        )
      },
      ledger: {
        id: 'ledger',
        label: 'Ledger tabs',
        tone: 'classic',
        svg: svg(
          stroke(
            '<path d="M5 4.75h10v10.5H5z"/><path d="M7 4.75v10.5"/><path d="M8.75 7.5h4.5"/><path d="M8.75 10.5h4.5"/><path d="M8.75 13.5h3"/>',
            '1.4'
          )
        )
      }
    }
  },
  'display-mode': {
    id: 'display-mode',
    label: 'Display mode',
    category: 'widget',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Viewport switch',
        tone: 'signature',
        svg: svg(
          stroke(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 15.25h4"/><path d="m10 8 1.85 1.85L10 11.7 8.15 9.85 10 8Z"/>',
            '1.45'
          )
        )
      },
      dual: {
        id: 'dual',
        label: 'Split mode',
        tone: 'popular',
        svg: svg(
          stroke(
            '<path d="M4.5 5.5h11v8.5h-11z"/><path d="M10 5.5v8.5"/><path d="M7 16h6"/>',
            '1.45'
          )
        )
      }
    }
  },
  'window-preferences': {
    id: 'window-preferences',
    label: 'Window preferences',
    category: 'widget',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Window manager',
        tone: 'signature',
        svg: svg(
          stroke(
            '<path d="M10 4.25 11 6l2 .35-.95 1.55.2 2.1L10 9.2 7.75 10l.2-2.1L7 6.35 9 6Z" stroke-width="1.35"/><path d="M4.75 12.5h10.5"/><path d="M7 15.5h6"/>',
            '1.45'
          )
        )
      },
      sliders: {
        id: 'sliders',
        label: 'Sliders window',
        tone: 'popular',
        svg: svg(
          stroke(
            '<path d="M4.75 5h10.5v10H4.75z"/><path d="M7 8.25h6"/><path d="M9 8.25V6.5"/><path d="M7 11.5h6"/><path d="M12 11.5V9.75"/><path d="M7 14.75h6"/><path d="M8.25 14.75V13"/>',
            '1.35'
          )
        )
      }
    }
  },
  'settings-payload': {
    id: 'settings-payload',
    label: 'Settings payload',
    category: 'widget',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Payload card',
        tone: 'signature',
        svg: svg(
          stroke(
            '<path d="M6 5.5h8"/><path d="M6 10h8"/><path d="M6 14.5h5"/><path d="M4.75 4.75h10.5v10.5H4.75z"/>',
            '1.45'
          )
        )
      },
      braces: {
        id: 'braces',
        label: 'Schema braces',
        tone: 'popular',
        svg: svg(
          stroke(
            '<path d="M7.25 5.25H6.5a1.25 1.25 0 0 0-1.25 1.25v1a1.5 1.5 0 0 1-1 1.41 1.5 1.5 0 0 1 1 1.41v1a1.25 1.25 0 0 0 1.25 1.25h.75"/><path d="M12.75 5.25h.75a1.25 1.25 0 0 1 1.25 1.25v1a1.5 1.5 0 0 0 1 1.41 1.5 1.5 0 0 0-1 1.41v1a1.25 1.25 0 0 1-1.25 1.25h-.75"/><path d="M8.5 7.5h3"/><path d="M8.5 10h3"/><path d="M8.5 12.5h2"/>',
            '1.3'
          )
        )
      }
    }
  },
  'catalog-search': {
    id: 'catalog-search',
    label: 'Catalog search',
    category: 'widget',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Search ring',
        tone: 'signature',
        svg: svg(
          stroke('<circle cx="8.5" cy="8.5" r="3.75"/><path d="m11.5 11.5 3.75 3.75"/>', '1.5')
        )
      },
      spotlight: {
        id: 'spotlight',
        label: 'Spotlight search',
        tone: 'popular',
        svg: svg(
          stroke(
            '<path d="M8.75 5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Z"/><path d="M11.75 11.75 15 15"/><path d="M7 8.75h3.5"/>',
            '1.45'
          )
        )
      }
    }
  },
  'catalog-results': {
    id: 'catalog-results',
    label: 'Catalog results',
    category: 'widget',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Result rows',
        tone: 'signature',
        svg: svg(
          `${stroke('<path d="M4.75 5.75h10.5"/><path d="M4.75 9.75h10.5"/><path d="M4.75 13.75h7.5"/>', '1.55')} ${fill(
            '<circle cx="14" cy="13.75" r="1.25"/>'
          )}`
        )
      },
      checklist: {
        id: 'checklist',
        label: 'Checklist rows',
        tone: 'popular',
        svg: svg(
          stroke(
            '<path d="M8 6h7"/><path d="M8 10h7"/><path d="M8 14h5"/><path d="m4.5 5.75 1 1L7 5.25"/><path d="m4.5 9.75 1 1L7 9.25"/><path d="m4.5 13.75 1 1L7 13.25"/>',
            '1.45'
          )
        )
      }
    }
  },
  'catalog-facets': {
    id: 'catalog-facets',
    label: 'Catalog facets',
    category: 'widget',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Facet filter',
        tone: 'signature',
        svg: svg(
          stroke(
            '<path d="M5.5 5.25h9"/><path d="M7 10h7"/><path d="M9 14.75h5"/><path d="M4.25 4.25h1.5v2h-1.5z"/><path d="M5.75 9h1.5v2h-1.5z"/><path d="M7.75 13.75h1.5v2h-1.5z"/>',
            '1.35'
          )
        )
      },
      funnel: {
        id: 'funnel',
        label: 'Filter funnel',
        tone: 'popular',
        svg: svg(
          stroke('<path d="M4.5 5.5h11L11.5 10v4.25L8.5 15V10L4.5 5.5Z"/>', '1.45')
        )
      }
    }
  },
  'layout-lock': {
    id: 'layout-lock',
    label: 'Layout lock',
    category: 'toolbar',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Locked layout',
        tone: 'signature',
        svg: svg(
          stroke(
            '<path d="M6.75 8V6.5a3.25 3.25 0 0 1 6.5 0V8"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            '1.55'
          )
        )
      },
      shield: {
        id: 'shield',
        label: 'Shield lock',
        tone: 'classic',
        svg: svg(
          stroke(
            '<path d="M10 3.75 14.75 5v4.25c0 3.25-1.9 5.45-4.75 7-2.85-1.55-4.75-3.75-4.75-7V5L10 3.75Z"/><path d="M8.1 9.25V8.5a1.9 1.9 0 0 1 3.8 0v.75"/><path d="M7.5 9.25h5v3.75h-5z"/>',
            '1.35'
          )
        )
      }
    }
  },
  'layout-unlock': {
    id: 'layout-unlock',
    label: 'Layout unlock',
    category: 'toolbar',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Unlocked layout',
        tone: 'signature',
        svg: svg(
          stroke(
            '<path d="M6.75 8V6.5a3.25 3.25 0 1 1 6.1 1.55"/><path d="M5.75 8h8.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>',
            '1.55'
          )
        )
      },
      wrench: {
        id: 'wrench',
        label: 'Unlock tool',
        tone: 'popular',
        svg: svg(
          stroke(
            '<path d="M12.75 4.5a2.5 2.5 0 0 0-2.8 3.2l-4.7 4.7a1.3 1.3 0 1 0 1.85 1.85l4.7-4.7a2.5 2.5 0 0 0 3.2-2.8l-1.65 1.15-1.7-.4-.4-1.7 1.5-1.3Z"/>',
            '1.3'
          )
        )
      }
    }
  },
  'layout-reset': {
    id: 'layout-reset',
    label: 'Layout reset',
    category: 'toolbar',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Loop reset',
        tone: 'signature',
        svg: svg(
          stroke(
            '<path d="M4.75 6.25V3.75"/><path d="M4.75 3.75h2.5"/><path d="m4.75 3.75 3.1 3.1"/><path d="M15.25 13.75v2.5"/><path d="M15.25 16.25h-2.5"/><path d="m15.25 16.25-3.1-3.1"/><path d="M5.25 10A4.75 4.75 0 0 1 14 7.5"/><path d="M14.75 10A4.75 4.75 0 0 1 6 12.5"/>',
            '1.5'
          )
        )
      },
      arrow: {
        id: 'arrow',
        label: 'Reset arrow',
        tone: 'popular',
        svg: svg(
          stroke('<path d="M6 6.75V4.5H3.75"/><path d="M4 4.75A6 6 0 1 1 4 15.25"/><path d="m4 15.25 2 2"/>', '1.45')
        )
      }
    }
  },
  'buttons-manager': {
    id: 'buttons-manager',
    label: 'Buttons manager',
    category: 'toolbar',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Button stack',
        tone: 'signature',
        svg: svg(
          stroke(
            '<path d="M5 5.25h10v3H5z"/><path d="M5 11.75h10V15H5z"/><path d="M10 6.75v7.5"/><path d="M8.25 10.5h3.5"/>',
            '1.35'
          )
        )
      },
      plus: {
        id: 'plus',
        label: 'Add button',
        tone: 'popular',
        svg: svg(stroke('<path d="M5.5 10h9"/><path d="M10 5.5v9"/>', '1.6'))
      }
    }
  },
  popout: {
    id: 'popout',
    label: 'Pop out',
    category: 'action',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Launch diagonal',
        tone: 'signature',
        svg: svg(
          stroke(
            '<path d="M7.5 4.75h7.75v7.75"/><path d="M8.5 11.5 15 5"/><path d="M4.75 7.5v7.75h7.75"/>',
            '1.6'
          )
        )
      },
      window: {
        id: 'window',
        label: 'External window',
        tone: 'popular',
        svg: svg(
          stroke(
            '<path d="M4.75 5.75h7.5v7.5h-7.5z"/><path d="M10.25 4.75h5v5"/><path d="M9.75 10.25 15 5"/>',
            '1.45'
          )
        )
      }
    }
  },
  pin: {
    id: 'pin',
    label: 'Pin',
    category: 'action',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Studio pin',
        tone: 'signature',
        svg: svg(
          stroke(
            '<path d="M12.4 3.75a2 2 0 0 1-.56 1.94l-.39.39 2.47 2.47.39-.39a2 2 0 0 1 1.94-.56l.7.18.76-.76-3.1-3.1-.76.76Z"/><path d="M10.32 7.14 6.6 10.86"/><path d="M10.32 7.14 6.73 3.55"/><path d="M10.32 7.14 14.44 11.26"/><path d="M6.6 10.86 3.75 16.25 9.14 13.4"/>',
            '1.45'
          )
        )
      },
      office: {
        id: 'office',
        label: 'Office pin',
        tone: 'popular',
        svg: svg(
          stroke('<path d="M10.25 4.25 14.5 8.5l-1.75 1.75-2.5-2.5-1.5 1.5v4.5L7.25 15v-5.75L5.5 7.5 10.25 4.25Z"/>', '1.35')
        )
      },
      bookmark: {
        id: 'bookmark',
        label: 'Bookmark pin',
        tone: 'classic',
        svg: svg(stroke('<path d="M6 4.75h8v10.5l-4-2.5-4 2.5Z"/>', '1.4'))
      }
    }
  },
  help: {
    id: 'help',
    label: 'Help',
    category: 'action',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Orb help',
        tone: 'signature',
        svg: svg(
          stroke(
            '<circle cx="10" cy="10" r="6"/><path d="M8.4 8.2a1.9 1.9 0 1 1 3 1.55c-.9.48-1.4 1.02-1.4 1.95"/><path d="M10 14.3h.01"/>',
            '1.35'
          )
        )
      },
      info: {
        id: 'info',
        label: 'Info badge',
        tone: 'popular',
        svg: svg(stroke('<circle cx="10" cy="10" r="6"/><path d="M10 8h.01"/><path d="M10 9.75v4"/>', '1.45'))
      }
    }
  },
  edge: {
    id: 'edge',
    label: 'Edge pin',
    category: 'action',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Dock edge',
        tone: 'signature',
        svg: svg(
          stroke(
            '<path d="M4.75 5.5h8.5v9h-8.5z"/><path d="M15.75 4.75v10.5"/><path d="M9 8h2.5"/><path d="M9 11h2.5"/>',
            '1.4'
          )
        )
      },
      dock: {
        id: 'dock',
        label: 'Floating dock',
        tone: 'popular',
        svg: svg(
          stroke(
            '<path d="M4.75 7h10.5v6H4.75z"/><path d="M15.75 4.75v10.5"/><path d="M7 10h6"/>',
            '1.45'
          )
        )
      }
    }
  },
  dock: {
    id: 'dock',
    label: 'Dock',
    category: 'widget',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Pinned dock',
        tone: 'signature',
        svg: svg(
          stroke(
            '<path d="M4.5 7.25h11v5.5h-11z"/><path d="M6.5 10h2"/><path d="M9 10h2"/><path d="M11.5 10h2"/>',
            '1.45'
          )
        )
      },
      rail: {
        id: 'rail',
        label: 'Dock rail',
        tone: 'popular',
        svg: svg(
          stroke(
            '<path d="M4.75 6.75h10.5v6.5H4.75z"/><path d="M6.5 9.5h1.5"/><path d="M9.25 9.5h1.5"/><path d="M12 9.5h1.5"/><path d="M4.75 13.25h10.5"/>',
            '1.35'
          )
        )
      }
    }
  },
  open: {
    id: 'open',
    label: 'Open',
    category: 'action',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Open view',
        tone: 'signature',
        svg: svg(
          stroke(
            '<path d="M4.75 6.25h10.5v7.5H4.75z"/><path d="M8 10h4"/><path d="M10 8v4"/>',
            '1.45'
          )
        )
      },
      arrow: {
        id: 'arrow',
        label: 'Open arrow',
        tone: 'popular',
        svg: svg(
          stroke('<path d="M5.25 10h8.5"/><path d="m10.5 5.25 4.25 4.75L10.5 14.75"/><path d="M5.25 5.25v9.5"/>', '1.45')
        )
      }
    }
  },
  center: {
    id: 'center',
    label: 'Center',
    category: 'window',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Center frame',
        tone: 'signature',
        svg: svg(
          stroke('<path d="M10 4.5v11"/><path d="M4.5 10h11"/><path d="M6.25 6.25h7.5v7.5h-7.5z"/>', '1.45')
        )
      },
      target: {
        id: 'target',
        label: 'Target center',
        tone: 'popular',
        svg: svg(
          stroke('<circle cx="10" cy="10" r="4.5"/><path d="M10 3.75V6"/><path d="M10 14v2.25"/><path d="M3.75 10H6"/><path d="M14 10h2.25"/>', '1.35')
        )
      }
    }
  },
  'roll-up': {
    id: 'roll-up',
    label: 'Roll up',
    category: 'window',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Chevron up',
        tone: 'signature',
        svg: svg(stroke('<path d="M5.5 11.5 10 7l4.5 4.5"/>', '1.55'))
      },
      classic: {
        id: 'classic',
        label: 'Classic collapse',
        tone: 'classic',
        svg: svg(stroke('<path d="M5.25 12.25h9.5"/><path d="m6.5 9.75 3.5-3.5 3.5 3.5"/>', '1.45'))
      }
    }
  },
  'roll-down': {
    id: 'roll-down',
    label: 'Roll down',
    category: 'window',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Chevron down',
        tone: 'signature',
        svg: svg(stroke('<path d="M5.5 8.5 10 13l4.5-4.5"/>', '1.55'))
      },
      classic: {
        id: 'classic',
        label: 'Classic expand',
        tone: 'classic',
        svg: svg(stroke('<path d="M5.25 7.75h9.5"/><path d="m6.5 10.25 3.5 3.5 3.5-3.5"/>', '1.45'))
      }
    }
  },
  minimize: {
    id: 'minimize',
    label: 'Minimize',
    category: 'window',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Flat minimize',
        tone: 'signature',
        svg: svg(stroke('<path d="M5.5 10.5h9"/>', '1.65'))
      },
      tray: {
        id: 'tray',
        label: 'Tray minimize',
        tone: 'popular',
        svg: svg(stroke('<path d="M5.25 12h9.5"/><path d="M7 8.5h6"/>', '1.45'))
      }
    }
  },
  maximize: {
    id: 'maximize',
    label: 'Maximize',
    category: 'window',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Square maximize',
        tone: 'signature',
        svg: svg(stroke('<path d="M5.25 5.25h9.5v9.5h-9.5z"/>', '1.45'))
      },
      expand: {
        id: 'expand',
        label: 'Expand corners',
        tone: 'popular',
        svg: svg(
          stroke('<path d="M7.25 5.25H5.25v2"/><path d="M12.75 5.25h2v2"/><path d="M12.75 14.75h2v-2"/><path d="M7.25 14.75h-2v-2"/>', '1.45')
        )
      }
    }
  },
  restore: {
    id: 'restore',
    label: 'Restore',
    category: 'window',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Window restore',
        tone: 'signature',
        svg: svg(
          stroke('<path d="M7 6.25h6.75V13"/><path d="M5.5 7h6.75v6.75H5.5z"/>', '1.45')
        )
      },
      stack: {
        id: 'stack',
        label: 'Stack restore',
        tone: 'popular',
        svg: svg(
          stroke('<path d="M6.5 5.25h8.25v8.25"/><path d="M5.25 6.5H13.5v8.25H5.25z"/>', '1.35')
        )
      }
    }
  },
  close: {
    id: 'close',
    label: 'Close',
    category: 'window',
    defaultVariant: 'signature',
    variants: {
      signature: {
        id: 'signature',
        label: 'Cross close',
        tone: 'signature',
        svg: svg(stroke('<path d="m6 6 8 8"/><path d="m14 6-8 8"/>', '1.55'))
      },
      rounded: {
        id: 'rounded',
        label: 'Rounded close',
        tone: 'popular',
        svg: svg(stroke('<path d="m6.25 6.25 7.5 7.5"/><path d="m13.75 6.25-7.5 7.5"/>', '1.7'))
      }
    }
  }
} satisfies Record<string, AppIconDefinition>;

export type AppIconName = keyof typeof APP_ICON_CATALOG;

export function getAppIconDefinition(name: AppIconName): AppIconDefinition {
  return APP_ICON_CATALOG[name];
}

export function listAppIconVariants(name: AppIconName): AppIconVariant[] {
  return Object.values(APP_ICON_CATALOG[name].variants as Record<string, AppIconVariant>);
}

export function getAppIconSvg(name: AppIconName, variant?: string): string {
  const definition = APP_ICON_CATALOG[name];
  const variants = definition.variants as Record<string, AppIconVariant>;
  const iconVariant = variants[variant ?? definition.defaultVariant];
  return (iconVariant ?? variants[definition.defaultVariant]).svg;
}

const maskCache = new Map<string, string>();

export function getAppIconMask(name: AppIconName, variant?: string): string {
  const cacheKey = `${name}:${variant ?? 'default'}`;
  const cached = maskCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const svgMarkup = getAppIconSvg(name, variant);
  const mask = `url("data:image/svg+xml;utf8,${encodeURIComponent(svgMarkup)}")`;
  maskCache.set(cacheKey, mask);
  return mask;
}
