"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center mt-6 px-4 sm:px-10">
      <Link href="/" className="text-lg font-medium text-black hover:text-zinc-700">
        <span className="bg-gradient-to-r from-black via-zinc-800 to-zinc-700 text-transparent bg-clip-text font-bold text-2xl">
          Zentha-Notepad
        </span>
      </Link>
    </nav>
  );
}
