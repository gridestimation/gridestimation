import LegacySite from '../components/LegacySite';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Grid Estimations',
  description: 'Professional solar estimation services for installation companies, EPCs, and project developers',
  url: 'https://gridestimations.com',
  logo: 'https://gridestimations.com/Logo%20Only%20(1).png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'customer service',
    email: 'info@gridestimations.com'
  },
  service: [
    { '@type': 'Service', name: 'Solar Layout Design', description: 'Optimized solar panel layouts with maximum efficiency and minimal shading impact' },
    { '@type': 'Service', name: 'Shading Analysis', description: 'Comprehensive shading studies using advanced modeling software' },
    { '@type': 'Service', name: 'Energy Yield Reports', description: 'Detailed production forecasts with 25-year projections and financial analysis' }
  ]
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <main id="root">
        <section className="seo-fallback" aria-label="Grid Estimations overview">
          <h1>Precision Solar Estimations for Growing Teams</h1>
          <p>Professional solar estimation, layout design, shading analysis, and energy yield reports for installers, EPCs, and project developers.</p>
          <h2>Solar Estimation Services</h2>
          <p>Get accurate solar layouts and project estimates delivered by experienced professionals.</p>
        </section>
      </main>
      <LegacySite />
    </>
  );
}
