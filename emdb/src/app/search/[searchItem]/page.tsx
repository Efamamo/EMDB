'use client';

import { useEffect, useState } from 'react';
import Results from '@/components/Results';
import Loading from '@/app/loading';

export default function Search({ params }: { params: { searchItem: string } }) {
  const [data, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const searchTerm = params.searchItem; // Fixed typo here
  const API_KEY = process.env.NEXT_PUBLIC_API_URL; // Fixed the env variable name for API_KEY

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching data...');
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US`
        );

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await res.json();
        setMovie(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  if (loading) return <Loading />;

  if (!data || !data.results) {
    return <div>No results found</div>; // Handle case when no data is available
  }

  return (
    <div>
      <Results results={data.results} />
    </div>
  );
}
