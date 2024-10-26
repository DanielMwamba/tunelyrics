import SearchResultsWrapper from '@/components/SearchResultsWrapper';

export default async function SearchResultsPage({ params }: { params: { query: string } }) {
  const query = params.query;

  const res = await fetch(`http://localhost:3000/api/search?q=${encodeURIComponent(query)}`); // Modifie l'URL si tu déploies l'application.
  if (!res.ok) {
    // Gérer l'erreur ici
    return <div>Erreur lors de la récupération des résultats.</div>;
  }
  
  const data = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchResultsWrapper results={data.response.hits} query={query} />
    </div>
  );
}
