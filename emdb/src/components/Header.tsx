import Link from 'next/link';
import Menu from './Menu';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <Menu title="Home" to="/" Icon={AiFillHome} />
        <Menu title="About" to="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center  gap-4">
        <ThemeSwitch />
        <Link
          href="/"
          className="text-2xl font-bold bg-amber-300 py-1 px-2 rounded-lg"
        >
          EMDB
        </Link>
      </div>
    </div>
  );
}
