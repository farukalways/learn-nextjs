"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ path, children }) => {
  const pathName = usePathname();
  const activeLink = pathName === path;
  return (
    <Link className={activeLink ? "text-blue-400" : ""} href={path}>
      {children}
    </Link>
  );
};

export default CustomLink;
