export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem', textAlign: 'center' }}>
      <div>
        <h1>Page not found</h1>
        <p>The requested page does not exist.</p>
        <a href="./">Return to the homepage</a>
      </div>
    </main>
  );
}
