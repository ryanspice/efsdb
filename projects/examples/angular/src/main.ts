import './style.css';

// Hydration Check (passing into the app)
const efsdbData = typeof window !== 'undefined' && (window as any).__EFSDB__ 
  ? (window as any).__EFSDB__ 
  : null;

// Remove initial loading spinner if present
setTimeout(() => {
  const loader = document.getElementById('efsdb-initial-loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 300);
  }
}, 0);

const siteData = {
  title: "EFSDB Angular Template",
  description: "A cohesive template spreading data from EFSDB.",
  features: [
    "Instant Edge Delivery",
    "Angular + Vite Integration",
    "Public Workspace Access"
  ]
};

let count = 0;

function renderApp() {
  let hydrationHtml = '';
  if (efsdbData) {
    hydrationHtml = `
      <section class="interactive-section" style="margin-top: 2rem;">
        <h2>EFSDB Hydration Data</h2>
        <pre style="text-align: left; background: #f4f4f5; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.875rem;">${JSON.stringify(efsdbData, null, 2)}</pre>
      </section>
    `;
  }

  const featuresHtml = siteData.features.map(feature => `
    <div class="feature-card">
      <h3>${feature}</h3>
      <p>Powered by the EFSDB runtime and public workspace.</p>
    </div>
  `).join('');

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="template-container">
      <header class="hero">
        <h1>${siteData.title}</h1>
        <p class="subtitle">${siteData.description}</p>
      </header>

      <main class="content">
        <section class="features-grid">
          ${featuresHtml}
        </section>

        <section class="interactive-section">
          <h2>Interactive Counter</h2>
          <p>State is preserved and hydrating works perfectly.</p>
          <button id="counter-btn" class="action-btn">
            Clicked ${count} times
          </button>
        </section>

        ${hydrationHtml}
      </main>
    </div>
  `;

  document.getElementById('counter-btn')?.addEventListener('click', () => {
    count++;
    renderApp();
  });
}

renderApp();
