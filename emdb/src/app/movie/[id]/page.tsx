'use client';
import Loading from '@/app/loading';
import { useEffect, useState } from 'react';

export default function Movie({ params }: { params: { id: string } }) {
  const [movie, setData] = useState<any>();
  const API_KEY = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`,
          { next: { revalidate: 10000 } }
        );

        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (movie) {
    return (
      <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
          <img
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path ? movie.backdrop_path : movie.poster_path
            }`}
            width={500}
            height={300}
            className="rounded-lg"
            style={{ maxWidth: '100%', height: '100%' }}
          ></img>
          <div className="p-2">
            <h2 className="text-lg mb-3 font-bold">
              {movie.title || movie.name}
            </h2>
            <p className="text-lg mb-3">{movie.overview}</p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Date Released:</span>
              {movie.release_date || movie.first_air_date}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Rating:</span>
              {movie.vote_count}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return <div>{<Loading />}</div>;
}
