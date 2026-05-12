'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#courses', label: 'Courses' },
  { href: '#about', label: 'About' },
  { href: '#founder', label: 'Our Story' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        boxShadow: scrolled ? '0 2px 24px rgba(124,58,237,0.12)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-transform group-hover:scale-110"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}
            >
              🚀
            </div>
            <div>
              <span
                className="font-fredoka text-xl leading-none"
                style={{ color: '#7C3AED' }}
              >
                CodeClimb
              </span>
              <span
                className="block text-[10px] font-bold tracking-[0.18em] uppercase leading-none mt-0.5"
                style={{ color: '#9CA3AF' }}
              >
                Academy
              </span>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold transition-colors duration-200 hover:opacity-70"
                style={{ color: scrolled ? '#374151' : '#1E1B4B' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/2347063197619"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full transition-all hover:scale-105"
              style={{
                background: '#DCFCE7',
                color: '#16A34A',
              }}
            >
              💬 WhatsApp
            </a>
            <a
              href="#register"
              className="text-sm font-bold px-5 py-2.5 rounded-full text-white transition-all hover:scale-105 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #EC4899)',
                boxShadow: '0 4px 14px rgba(124,58,237,0.3)',
              }}
            >
              Enroll Now 🚀
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-xl transition-all"
            style={{
              background: menuOpen ? '#F5F3FF' : 'transparent',
              color: '#7C3AED',
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden rounded-2xl mb-4 overflow-hidden shadow-2xl"
            style={{
              background: 'white',
              border: '1.5px solid #A78BFA44',
            }}
          >
            <div className="p-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm transition-all hover:bg-purple-50"
                  style={{ color: '#374151' }}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 pt-2 border-t flex flex-col gap-2" style={{ borderColor: '#F3F4F6' }}>
                <a
                  href="https://wa.me/2347063197619"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm"
                  style={{ background: '#DCFCE7', color: '#16A34A' }}
                >
                  💬 Chat on WhatsApp
                </a>
                <a
                  href="#register"
                  onClick={() => setMenuOpen(false)}
                  className="py-3.5 rounded-xl font-bold text-sm text-white text-center"
                  style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}
                >
                  🚀 Enroll Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
