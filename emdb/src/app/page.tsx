'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Results from '@/components/Results';

export default function MyComponent() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const genre = searchParams.get('genre') || 'fetchTrending';
  const API_KEY = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3${
            genre === 'fetchTopRated'
              ? `/movie/top_rated`
              : `/trending/all/week`
          }?api_key=${API_KEY}&language=en-US`,
          { next: { revalidate: 10000 } }
        );

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [genre]); // Fetch data whenever myParam changes

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Results results={data.results} />
    </div>
  );
}
