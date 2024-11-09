"use client";

import Link from "next/link";
import { Navbar , DarkThemeToggle } from "flowbite-react";


export function DefaultHeader() {
    return (
        <Navbar>
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Book Store</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} href="#">
            About
          </Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
        <DarkThemeToggle/>
      </Navbar>
    )
}


export function DefaultFooter() {
    return (
        <h1>Footer</h1>
    )
}