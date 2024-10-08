import Link from 'next/link';
import { IconType } from 'react-icons';
interface MenuProps {
  title: string;
  to: string;
  Icon: IconType;
}
export default function Menu({ title, to, Icon }: MenuProps) {
  return (
    <Link className="hover:text-blue-500" href={to}>
      <div className="sm:hidden text-2xl ">
        <Icon />
      </div>
      <p className="uppercase hidden sm:inline text-base font-semibold">
        {title}
      </p>
    </Link>
  );
}
