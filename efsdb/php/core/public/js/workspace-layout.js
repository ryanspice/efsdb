const layoutStyles = `
.workspace-layout {
    display: grid;
    gap: 1.5rem;
    --sidebar-size: 26rem;
}

.workspace-layout[data-sidebar-pos="right"] {
    grid-template-columns: minmax(0, 1fr) var(--sidebar-size);
}

.workspace-layout[data-sidebar-pos="left"] {
    grid-template-columns: var(--sidebar-size) minmax(0, 1fr);
}
.workspace-layout[data-sidebar-pos="left"] > :first-child {
    order: 2;
}
.workspace-layout[data-sidebar-pos="left"] > aside {
    order: 1;
}

.workspace-layout[data-sidebar-pos="bottom"] {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr) auto;
}

.workspace-layout[data-sidebar-pos="top"] {
    grid-template-columns: minmax(0, 1fr);
}
.workspace-layout[data-sidebar-pos="top"] > :first-child {
    order: 2;
}
.workspace-layout[data-sidebar-pos="top"] > aside {
    order: 1;
}

.workspace-resizer {
    position: absolute;
    z-index: 10;
    transition: background-color 0.2s;
}
.workspace-resizer:hover, .workspace-resizer:active {
    background-color: var(--accent, #3b82f6);
}

.resizer-right {
    top: 0;
    bottom: 0;
    left: -0.75rem;
    width: 0.5rem;
    cursor: col-resize;
}
.resizer-left {
    top: 0;
    bottom: 0;
    right: -0.75rem;
    width: 0.5rem;
    cursor: col-resize;
}
.resizer-top {
    left: 0;
    right: 0;
    bottom: -0.75rem;
    height: 0.5rem;
    cursor: row-resize;
}
.resizer-bottom {
    left: 0;
    right: 0;
    top: -0.75rem;
    height: 0.5rem;
    cursor: row-resize;
}

@media (max-width: 1024px) {
    .workspace-layout {
        grid-template-columns: 1fr !important;
        --sidebar-size: auto !important;
    }
    .workspace-layout > :first-child, .workspace-layout > aside {
        order: 0 !important;
    }
    .workspace-resizer {
        display: none;
    }
}
`;

const styleEl = document.createElement('style');
styleEl.textContent = layoutStyles;
document.head.appendChild(styleEl);

class WorkspaceLayoutManager {
    constructor(container) {
        this.container = container;
        this.toggles = container.querySelectorAll('[data-layout-toggle]');
        if (!this.toggles.length) {
            // Might be outside the container, look in document
            const id = container.id;
            if (id) {
                const prefix = id.replace('-workspace-layout', '');
                this.toggles = document.querySelectorAll(`[data-layout-toggle][data-target="${prefix}"]`);
                if (!this.toggles.length) {
                    // Just find any toggles that might be globally scoped to this layout
                    this.toggles = document.querySelectorAll(`[data-layout-toggle]`);
                }
            }
        }
        
        this.pageKey = container.id || 'default-workspace';
        this.savedPos = localStorage.getItem(`efsdb-${this.pageKey}-pos`) || 'right';
        this.savedSize = localStorage.getItem(`efsdb-${this.pageKey}-size`) || '26rem';
        
        this.init();
    }

    init() {
        this.updateLayout(this.savedPos);
        this.container.style.setProperty('--sidebar-size', this.savedSize);

        this.toggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.updateLayout(toggle.dataset.layoutToggle);
            });
        });

        this.addResizer();
    }

    updateLayout(pos) {
        this.currentPos = pos;
        this.container.setAttribute('data-sidebar-pos', pos);
        this.toggles.forEach(t => t.setAttribute('data-active', t.dataset.layoutToggle === pos ? 'true' : 'false'));
        localStorage.setItem(`efsdb-${this.pageKey}-pos`, pos);
        this.updateResizerPosition();
    }

    addResizer() {
        this.resizer = document.createElement('div');
        this.resizer.className = 'workspace-resizer';
        this.container.appendChild(this.resizer);
        
        let isResizing = false;
        let startX, startY, startSize;

        const onMouseMove = (e) => {
            if (!isResizing) return;
            
            let newSize;
            if (this.currentPos === 'right') {
                const deltaX = startX - e.clientX;
                newSize = startSize + deltaX;
            } else if (this.currentPos === 'left') {
                const deltaX = e.clientX - startX;
                newSize = startSize + deltaX;
            } else if (this.currentPos === 'bottom') {
                const deltaY = startY - e.clientY;
                newSize = startSize + deltaY;
            } else if (this.currentPos === 'top') {
                const deltaY = e.clientY - startY;
                newSize = startSize + deltaY;
            }

            // Min/max constraints
            const minSize = 256; // 16rem
            const maxSize = this.currentPos === 'left' || this.currentPos === 'right' 
                ? window.innerWidth * 0.5 
                : window.innerHeight * 0.5;

            newSize = Math.max(minSize, Math.min(newSize, maxSize));
            
            this.savedSize = `${newSize}px`;
            this.container.style.setProperty('--sidebar-size', this.savedSize);
            localStorage.setItem(`efsdb-${this.pageKey}-size`, this.savedSize);
        };

        const onMouseUp = () => {
            isResizing = false;
            document.body.style.cursor = '';
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        this.resizer.addEventListener('mousedown', (e) => {
            isResizing = true;
            startX = e.clientX;
            startY = e.clientY;
            
            const computedStyle = window.getComputedStyle(this.container);
            startSize = parseFloat(computedStyle.getPropertyValue('--sidebar-size')) || 416; // 26rem
            
            document.body.style.cursor = this.currentPos === 'left' || this.currentPos === 'right' ? 'col-resize' : 'row-resize';
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
        
        this.updateResizerPosition();
    }
    
    updateResizerPosition() {
        if (!this.resizer) return;
        
        // Remove old classes
        this.resizer.classList.remove('resizer-left', 'resizer-right', 'resizer-top', 'resizer-bottom');
        
        // The resizer sits logically between the main content and the sidebar.
        // Since we use CSS grid/flex to order them, we can use absolute positioning 
        // relative to the sidebar (aside) to place the handle.
        const aside = this.container.querySelector('aside');
        if (aside) {
            aside.style.position = 'relative';
            aside.appendChild(this.resizer);
            this.resizer.classList.add(`resizer-${this.currentPos}`);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.workspace-layout').forEach(container => {
        new WorkspaceLayoutManager(container);
    });
});
