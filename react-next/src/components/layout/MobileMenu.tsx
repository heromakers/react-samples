"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { usePathname, useRouter } from "next/navigation";

interface MobileMenuProps {
  closeMobileMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMobileMenu }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">
          <img src="/img/general/logo-dark.svg" alt="brand" />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={closeMobileMenu}
        >
          <i className="icon icon-close"></i>
        </div>
      </div>

      <Sidebar width="400" backgroundColor="#fff">
        <Menu>
          <MenuItem
            onClick={() => router.push("/")}
            className={pathname === "/" ? "menu-active-link" : ""}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/blog")}
            className={pathname === "/blog" ? "menu-active-link" : ""}
          >
            Blog
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/work")}
            className={pathname === "/work" ? "menu-active-link" : ""}
          >
            Work
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/contact")}
            className={pathname === "/contact" ? "menu-active-link" : ""}
          >
            Contact
          </MenuItem>
        </Menu>
      </Sidebar>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>
    </>
  );
};

export default MobileMenu;
