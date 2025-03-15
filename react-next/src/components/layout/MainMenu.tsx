"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathname = usePathname();

  const style = "text-dark-1";
  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li className={pathname === "/" ? "current" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/blog" ? "current" : ""}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={pathname === "/work" ? "current" : ""}>
          <Link href="/work">Work</Link>
        </li>
        <li className={pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
