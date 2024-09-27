'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface NavBarItemProps {
  title: string;
  link: string;
}
export default function NavBarItem({ title, link }: NavBarItemProps) {
  const genre = useSearchParams().get('genre');
  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === link
            ? 'underline underline-offset-8 decoration-amber-500 rounded-lg'
            : ''
        }`}
        href={`/?genre=${link}` }
      >
        {title}
      </Link>
    </div>
  );
}
