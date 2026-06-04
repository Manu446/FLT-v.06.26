'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ministries", label: "Ministries" },
  { href: "/sermons", label: "Sermons" },
  { href: "/events", label: "Events" },
  { href: "/prayer", label: "Prayer" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${scrolled ? "bg-cream/85 backdrop-blur-2xl py-3 shadow-sm border-b border-black/[0.06]" : "py-5"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.img
            src="/logo.png"
            alt="Future Life Tabernacle"
            className="h-10 w-auto"
            whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <span className="hidden sm:inline font-display text-xl text-stone-text">
            <span className="text-gold">Future</span> Life Tabernacle
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${pathname === l.href ? "text-gold-dark" : "text-stone-text hover:text-gold-dark"}`}
            >
              {l.label}
              {pathname === l.href && (
                <motion.span layoutId="nav-underline" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gold rounded-full" />
              )}
            </Link>
          ))}
          <Link href="/contact#giving" className="btn-gold text-xs py-2.5 px-6 ml-3">
            Give
          </Link>
        </div>

        <button className="lg:hidden p-2 border border-black/[0.06] rounded-xl" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden container mx-auto px-6 mt-2"
          >
            <div className="bg-white border border-black/[0.06] rounded-2xl p-4 shadow-lg">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className={`block py-2.5 text-sm font-medium ${pathname === l.href ? "text-gold-dark" : "text-stone-text"}`}>
                  {l.label}
                </Link>
              ))}
              <Link href="/contact#giving" className="btn-gold w-full justify-center mt-2 text-xs">
                Give
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
