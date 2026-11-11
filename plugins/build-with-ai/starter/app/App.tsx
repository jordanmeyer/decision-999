import site from './site.json';

export function App() {
  return <main>
    <h1>{site.name}</h1>
    <p className="lead">{site.tagline}</p>
  </main>;
}
