import { DropDown, HamBurgerMenu, Logo } from '@/assets/index';
import Link from 'next/link';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// FIXME
// fix scroll issue when the nav is open
// added padding of 16 px in story book
export const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  const Links = [
    {
      name: 'Destination',
      href: '/destination',
      isDropDown: false,
    },
    {
      name: 'Stays',
      href: '/stays',
      isDropDown: true,
      dropDown: {},
    },
    {
      name: 'Team Retreat',
      href: '/team-retreat',
      isDropDown: false,
    },
    {
      name: 'Blog',
      href: '/blog',
      isDropDown: false,
    },
    {
      name: 'About',
      href: '/about',
      isDropDown: false,
    },
  ];
  return (
    <header
      className={`${
        navBar ? `fixed top-0 left-0 w-full bg-white` : `block`
      } max-w-7xl mx-auto`}
    >
      <nav className="mx-5 md:mx-14 flex justify-between items-center">
        <Link href="/">
          <Logo className="w-[102px] h-[24px]" alt="Wandr logo" />
        </Link>
        <div className="md:hidden" onClick={() => setNavBar((prev) => !prev)}>
          <HamBurgerMenu />
        </div>
        <ul
          className={`my-4 ${
            navBar
              ? `fixed top-16 left-0 bg-white w-screen h-screen font-semibold text-base font-inter transition-all duration-300`
              : `hidden md:flex items-center font-semibold text-base font-inter`
          }`}
        >
          {Links.map((item) => {
            if (item.isDropDown) {
              return (
                <li
                  className="mx-5 md:ml-8 flex justify-between items-center"
                  key={uuidv4()}
                >
                  <a>{item.name}</a>
                  <DropDown className="hidden md:block w-6 h-6 hover:-rotate-180 transition-all duration-300" />
                </li>
              );
            } else {
              return (
                <li className="mx-5 md:ml-8" key={uuidv4()}>
                  <a>{item.name}</a>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};
