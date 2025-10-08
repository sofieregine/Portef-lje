import Link from "next/link";
import { FC } from "react";

interface Navlinksprops {
  links: {
    href: string;
    title: string;
  }[];
}
const Navlinks: FC<Navlinksprops> = ({ links }) => {
  return (
    <div className=" grow flex justify-end gap-28 text-2xl max-sm:hidden">
      {links.map((link) => {
        return (
          <Link key={link.title} href={link.href}>
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Navlinks;
