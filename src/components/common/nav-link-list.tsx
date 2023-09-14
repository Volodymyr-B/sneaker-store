import { FC } from "react";
import Link from "next/link";

interface NavLinkListProps {
  title: string;
  list: { title: string; link: string }[];
}

export const NavLinkList: FC<NavLinkListProps> = ({ title, list }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {list.map((nav) => (
          <li key={nav.title}>
            <Link
              href={nav.link}
              className="text-app-primary_action hover:text-white transition-all"
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
