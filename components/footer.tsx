'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Image
                  src="/connecta-logo.png"
                  alt="Connecta"
                  width={44}
                  height={44}
                  className="h-11 w-auto"
                />
                <span className="text-white/40 text-lg">×</span>
                <Image
                  src="/zoho-logo.png"
                  alt="Zoho"
                  width={56}
                  height={44}
                  className="h-11 w-auto"
                />
              </div>
              <p className="text-white/70 text-sm">Đối tác triển khai chính thức của Zoho tại Việt Nam</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#comparison" className="text-white/70 hover:text-white transition-colors">
                  So sánh chi phí
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-white/70 hover:text-white transition-colors">
                  Tính năng
                </Link>
              </li>
              <li>
                <Link href="#why-connecta" className="text-white/70 hover:text-white transition-colors">
                  Tại sao Connecta
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liên hệ</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <Phone size={20} />
                <a href="tel:+842544862888">084 486 2888 (Hotline/Zalo · 24/7)</a>
              </div>
              <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <Mail size={20} />
                <a href="mailto:sales@connecta.vn">sales@connecta.vn</a>
              </div>
              <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <Globe size={20} />
                <a href="https://connecta.vn" target="_blank" rel="noopener noreferrer">connecta.vn</a>
              </div>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>Lê Thanh Nghị, Hà Nội, Việt Nam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Links */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Chính sách bảo mật
            </Link>
            <span className="text-white/20 hidden md:inline">|</span>
            <Link href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Điều khoản & Điều kiện
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-white/70 text-sm text-center md:text-right">
            <p>© 2026 Connecta • Đối tác triển khai chính thức của Zoho tại Việt Nam</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
