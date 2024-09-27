import Card from './Card';

export default function Results({ results }: { results: any[] }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-6xl mx-auto py-4">
      {results.map((result) => (
        <Card result={result} />
      ))}
    </div>
  );
}
