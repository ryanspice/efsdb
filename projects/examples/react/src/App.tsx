import { useEffect, useState } from 'react';
import './index.css';

function App({ efsdb }: { efsdb?: any }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const loader = document.getElementById('efsdb-initial-loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 300);
    }
  }, []);

  const siteData = {
    title: "EFSDB React Template",
    description: "A cohesive template spreading data from EFSDB.",
    features: [
      "Instant Edge Delivery",
      "React + Vite Integration",
      "Public Workspace Access"
    ]
  };

  return (
    <div className="template-container">
      <header className="hero">
        <h1>{siteData.title}</h1>
        <p className="subtitle">{siteData.description}</p>
      </header>

      <main className="content">
        <section className="features-grid">
          {siteData.features.map((feature, i) => (
            <div key={i} className="feature-card">
              <h3>{feature}</h3>
              <p>Powered by the EFSDB runtime and public workspace.</p>
            </div>
          ))}
        </section>

        <section className="interactive-section">
          <h2>Interactive Counter</h2>
          <p>State is preserved and hydrating works perfectly.</p>
          <button className="action-btn" onClick={() => setCount(count + 1)}>
            Clicked {count} times
          </button>
        </section>

        {efsdb && (
          <section className="interactive-section" style={{ marginTop: '2rem' }}>
            <h2>EFSDB Hydration Data</h2>
            <pre style={{ textAlign: 'left', background: '#f4f4f5', padding: '1rem', borderRadius: '8px', overflowX: 'auto', fontSize: '0.875rem' }}>
              {JSON.stringify(efsdb, null, 2)}
            </pre>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
