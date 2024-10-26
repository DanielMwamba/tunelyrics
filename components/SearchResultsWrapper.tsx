'use client'

import SearchResults from '@/components/search-results';

type SearchResultsWrapperProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  results: any[]; // Remplace par un type approprié
  query: string;
};

export default function SearchResultsWrapper({ results, query }: SearchResultsWrapperProps) {
  return <SearchResults results={results} query={query} />;
}
