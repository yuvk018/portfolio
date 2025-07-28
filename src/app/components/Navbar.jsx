"use client";
import React,{ useState } from 'react'
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';
const navlinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  }
];
const Navbar = () => {
    const [navbarOpen, setNavbarOpen]= useState(false)
  return (
    <nav className="fixed  top-0 left-0 right-0 z-10 bg-[rgba(18,18,18,0.9)]">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        {" "}
        <Link
          href={"/"}
          className="text-white mt-6 ml-15 font-extrabold text-2xl md:text-4xl lg:text-6xl tracking-wide uppercase animate-pulse"
        >
          Portfolio
        </Link>
        {/* <Link
          href={"/"}
          className="text-white font-semibold text-2xl ml-15 md:text-5xl"
        >
          YUVRAJ
        </Link>{" "} */}
        <div className="mobile-menu md:hidden block">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 text-slate-200 py-2 border border-slate-200 rounded hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5 " />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 text-slate-200 py-2 border border-slate-200 rounded hover:text-white hover:border-white"
            >
              <XCircleIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:flex-row p-4 md:p-0 md:space-x-8 mt-0 mr-12">
            {navlinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navlinks} closeMenu={() => setNavbarOpen(false)} />
      ) : null}
    </nav>
  );
}

export default Navbar
