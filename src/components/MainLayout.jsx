"use client";

import Link from "next/link";
import { Navbar , DarkThemeToggle } from "flowbite-react";
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";


export function DefaultHeader() {
    return (
        <Navbar>
        <Navbar.Brand as={Link} href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Book Store</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} href="/about">
            About
          </Navbar.Link>
          <Navbar.Link as={Link} href="/services">Services</Navbar.Link>
          <Navbar.Link as={Link} href="/contact">Contact</Navbar.Link>
          <Navbar.Link as={Link} href="/pricing">Pricing</Navbar.Link>
        </Navbar.Collapse>
        <DarkThemeToggle/>
      </Navbar>
    )
}


export function DefaultFooter() {
    return (
        <Footer container className="rounded-none">
      <FooterCopyright href="/" by="Book Store" year={new Date().getFullYear()} />
      <FooterLinkGroup>
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/services">Services</FooterLink>
        <FooterLink href="/pricing">Pricing</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
    )
}
