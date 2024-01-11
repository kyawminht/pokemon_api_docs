import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";


const Nav = () => {
  return (
   
    <div className="container mx-auto md:px-[150px] px-5 sticky top-0">
      <Navbar rounded>
        <NavbarBrand className=" ">
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            Pokemon API
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse className=" ">
          <NavbarLink href="/" active>
            Home
          </NavbarLink>
          <NavbarLink href="/docs">Docs</NavbarLink>
          <NavbarLink href="https://github.com/kyawminht/pokemon_api" target="_blank">GitHub</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
    
  );
};

export default Nav;
