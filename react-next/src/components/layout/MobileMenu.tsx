import { useState } from "react";
import Link from "next/link";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { usePathname, useRouter } from "next/navigation";

const MobileMenu = () => {
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
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>

      <Sidebar width="400" backgroundColor="#fff">
        <Menu>
          <MenuItem
            onClick={() => router.push("/")}
            className={pathname === "/" ? "menu-active-link" : ""}
          >
            Home
          </MenuItem>

          {/* <SubMenu label="Home" className={ homeItems.some((item=>item.routePath?.split('/')[1] == pathname.split('/')[1])) ? "menu-active-link":''}>
              {homeItems.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={()=>router.push(item.routePath)}
                  className={
                    isActiveLink(item.routePath, pathname)
                      ? "menu-active-link"
                      : "inactive-menu"
                  }
                 
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu> */}

          {/* <SubMenu label="Categories" className={isActiveParent ? 'menu-active-link':'' }>
              {categorieMobileItems.map((item) => (
                <SubMenu label={item.title} key={item.id} className={isActiveNestedParent == item.id ? 'menu-active-link':'inactive-menu'}>
                  {item.menuItems.map((single) => (
                    <SubMenu label={single.title} key={single.id}  className={isActiveNestedParentTwo == single.title ? 'menu-active-link':'inactive-menu'} >
                      {single.menuList.map((menu, i) => (
                        <MenuItem
                          key={i}
                          onClick={()=>router.push(menu.routePath)}
                          className={
                            isActiveLink(menu.routePath, pathname)
                              ? "menu-active-link"
                              : "inactive-menu"
                          }
                        >
                          {menu.name}
                        </MenuItem>
                      ))}
                    </SubMenu>
                  ))}
                </SubMenu>
              ))}
            </SubMenu> */}

          <MenuItem
            onClick={() => router.push("/destinations")}
            className={pathname === "/destinations" ? "menu-active-link" : ""}
          >
            Desitinations
          </MenuItem>

          <MenuItem
            onClick={() => router.push("/contact")}
            className={pathname === "/contact" ? "menu-active-link" : ""}
          >
            Contact
          </MenuItem>
          {/* End Contact  Menu */}
        </Menu>
      </Sidebar>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>
    </>
  );
};

export default MobileMenu;
