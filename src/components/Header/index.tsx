"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import { useCart } from "@/context/CartContext";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();
  const { cartItems } = useCart();

  // Calculate total items in cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed z-[9999] bg-red shadow-sticky transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-1.5 xl:px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/logo/monkey.svg"
                    alt="logo"
                    width={90}
                    height={20}
                  />
                  <div className="flex flex-col justify-center">
                    <div className="font-sigmar text-3xl text-tan -mb-2">MONKEY</div>
                    <div className="font-sigmar text-3xl text-tan">MONKEY</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-1.5 xl:px-4">
              <div className="flex-1 flex justify-end">
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 md:visible md:static md:w-auto md:border-none md:!bg-transparent md:p-0 md:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block md:flex md:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`font-sigmar flex py-2 text-base md:mr-0 md:inline-flex md:px-0 md:py-6 ${
                              usePathName === menuItem.path
                                ? "text-dark"
                                : "text-tan hover:text-dark"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary md:mr-0 md:inline-flex md:px-0 md:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 md:invisible md:absolute md:top-[110%] md:block md:w-[250px] md:p-4 md:opacity-0 md:shadow-lg md:group-hover:visible md:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-primary md:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Cart Icon and Hamburger Menu */}
              <div className="relative ml-8 flex items-center gap-4">
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="block rounded-lg px-3 py-[6px] ring-primary md:hidden"
                >
                  <Image
                    src="/images/hamburger-icon.svg"
                    alt="Menu"
                    width={20}
                    height={20}
                  />
                </button>
                <Link
                  href="/cart"
                  className="flex items-center justify-center rounded-full p-2"
                >
                  <Image
                    src="/images/cart-icon.svg"
                    alt="Cart"
                    width={20}
                    height={20}
                  />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
          {sticky && (
            <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-[100vw] h-[6px]">
              <Image
                src="/images/border.svg"
                alt=""
                width={10000}
                height={9}
                className="w-full h-[6px] object-cover"
                priority
              />
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
