import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

export default function Card({ result }: { result: any }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt="movie image"
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        ></img>
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className="flex items-center gap-2">
            {result.release_date || result.first_air_date}
            <div className="flex items-center gap-1">
              <FiThumbsUp />
              {result.vote_count}
            </div>
          </p>
        </div>
      </Link>
    </div>
  );
}
