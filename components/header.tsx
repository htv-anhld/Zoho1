'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border backdrop-blur-md bg-background/80">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="hidden md:flex items-center gap-2">
              <Image
                src="/connecta-logo.png"
                alt="Connecta"
                width={44}
                height={44}
                className="h-11 w-auto"
              />
              <span className="text-sm text-muted-foreground font-light">×</span>
              <Image
                src="/zoho-logo.png"
                alt="Zoho"
                width={52}
                height={40}
                className="h-10 w-auto"
              />
              <div className="flex flex-col ml-1">
                <span className="text-xs font-bold text-foreground">Connecta</span>
                <span className="text-xs text-muted-foreground">Đối tác chính thức</span>
              </div>
            </div>
            <div className="md:hidden">
              <Image
                src="/connecta-logo.png"
                alt="Connecta"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#comparison" className="text-sm text-foreground hover:text-primary transition-colors">
              So sánh chi phí
            </a>
            <a href="#features" className="text-sm text-foreground hover:text-primary transition-colors">
              Tính năng
            </a>
            <a href="#why-connecta" className="text-sm text-foreground hover:text-primary transition-colors">
              Tại sao Connecta
            </a>
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:1234567890" className="text-sm text-primary font-medium hover:text-primary/80 transition-colors">
              Hotline
            </a>
            <a
              href="#lead-form"
              style={{ backgroundImage: 'linear-gradient(180deg, #466086 0%, #374B6B 50%, #2F4364 100%)' }}
              className="group relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-[12px] border border-white/[0.12] px-5 h-10 text-sm font-heading font-semibold tracking-[-0.2px] text-white shadow-[0_4px_12px_rgba(55,75,107,0.20)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:brightness-[1.05] hover:shadow-[0_8px_20px_rgba(55,75,107,0.28)] active:scale-[0.98] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25"
            >
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white/[0.08] to-transparent" />
              <span className="relative z-10">Nhận Báo Giá</span>
              <ArrowRight size={16} strokeWidth={2.25} className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-3">
              <a
                href="#comparison"
                className="text-sm text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                So sánh chi phí
              </a>
              <a
                href="#features"
                className="text-sm text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Tính năng
              </a>
              <a
                href="#why-connecta"
                className="text-sm text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Tại sao Connecta
              </a>
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <a href="tel:1234567890" className="text-sm text-primary font-medium py-2">
                  Hotline
                </a>
                <a
                  href="#lead-form"
                  style={{ backgroundImage: 'linear-gradient(180deg, #466086 0%, #374B6B 50%, #2F4364 100%)' }}
                  className="group relative inline-flex w-full items-center justify-center gap-1.5 overflow-hidden rounded-[12px] border border-white/[0.12] px-4 h-11 text-sm font-heading font-semibold tracking-[-0.2px] text-white shadow-[0_4px_12px_rgba(55,75,107,0.20)] transition-all duration-300 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25"
                  onClick={() => setIsOpen(false)}
                >
                  <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white/[0.08] to-transparent" />
                  <span className="relative z-10">Nhận Báo Giá</span>
                  <ArrowRight size={16} strokeWidth={2.25} className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
