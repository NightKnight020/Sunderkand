"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#schedule", label: "Schedule" },
  { href: "#sunderkand", label: "Sunderkand" },
  { href: "#join", label: "Join Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-saffron-100">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <a href="#" className="font-serif text-lg font-bold text-saffron-700">
          🙏 Brantford Sunderkand
        </a>
        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-saffron-800 hover:text-saffron-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        {/* Mobile toggle */}
        <button
          className="md:hidden text-saffron-700 text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-saffron-100 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-saffron-800 hover:text-saffron-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
