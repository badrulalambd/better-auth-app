"use client";

import { Button, Link, Spinner } from "@heroui/react";
import { useState } from "react";
import { signOut, useSession } from './../../../lib/auth-client'

export default function NavbarApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = useSession();
  console.log("User Session in Navbar: ", session)

  if (isPending) {
    return
    <div className="flex flex-col items-center gap-2">
      <Spinner color="success" />
      <span className="text-xs text-muted">Loading...</span>
    </div>
  }

  const navLinks = <>
    <Link href="/" className="text-gray-700 hover:text-black">
      Home
    </Link>

    {
      session?.user && (
        <Link href="/dashboard" className="text-gray-700 hover:text-black">
      Dashboard
    </Link>
      )
    }

    <Link
      href="/services"
      className="font-medium text-black"
    >
      Services
    </Link>

    {
      session?.user && (
        <Link href="/profile" className="text-gray-700 hover:text-black">
      Profile
    </Link>
      )
    }
  </>

  const authLinks = <>
    {
      session?.user ? <>
        <span>Welcome, {session.user.name}</span>
        <Button onClick={() => signOut()}>
          Sign Out
        </Button>
      </>
        :
        <>
          <Link href="/sign-in" className="text-gray-700 hover:text-black">
            Login
          </Link>

          <Link href="/sign-up">
            <Button color="primary">
              Sign Up
            </Button>
          </Link>
        </>
    }
  </>

  const authLinks2 = <>
    <Link
      href="/sign-in"
      onClick={() => setIsMenuOpen(false)}
      className="mb-3 block text-gray-700"
    >
      Login
    </Link>

    <Link href="/sign-up">
      <Button color="primary" className="w-full">
        Sign Up
      </Button>
    </Link>
  </>

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">

        {/* Left Side - Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-black">
            <p className="text-xl font-bold">ACME</p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          {authLinks}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-black hover:bg-gray-100 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks}

            <div className="border-t border-gray-200 pt-4">
              {authLinks}

            </div>
          </div>
        </div>
      )}
    </nav>
  );
}