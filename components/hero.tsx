'use client'

import Image from 'next/image'
import { CTAButton } from './cta-button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-12 md:pt-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 -z-10" />
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10 opacity-50" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 opacity-30" />

      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-2">
                <span className="text-xs font-semibold tracking-[0.12em] text-primary uppercase">
                  Zoho Workplace — Đối tác triển khai chính thức tại Việt Nam
                </span>
              </div>
              <h1 className="font-bold text-4xl md:text-6xl leading-tight tracking-tight text-foreground mb-4 text-balance">
                Email doanh nghiệp và bộ công cụ làm việc trong <span className="text-primary">một nền tảng</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                Zoho Workplace — bộ email và ứng dụng văn phòng cho doanh nghiệp. Connecta triển khai trọn gói tại Việt Nam.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 pt-4">
              <CTAButton
                href="#lead-form"
                variant="primary"
              >
                Nhận Báo Giá & Dùng Thử Miễn Phí
              </CTAButton>
              <CTAButton
                href="#bang-gia"
                variant="secondary"
              >
                Xem bảng giá
              </CTAButton>
            </div>

            {/* Three trust sub-lines */}
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
              <span>Bản quyền Zoho Workplace</span>
              <span className="text-primary/40">•</span>
              <span>Triển khai &amp; chuyển dữ liệu</span>
              <span className="text-primary/40">•</span>
              <span>Hỗ trợ và gia hạn tại Việt Nam</span>
            </p>
          </div>

          {/* Right - Dashboard Mockup */}
          <div className="relative animate-fade-up-delay">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/dashboard-mockup.png"
                alt="Zoho Workplace Dashboard - Mail, Cliq, WorkDrive"
                fill
                className="object-cover"
                priority
              />
              {/* Glassmorphism overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-border">
              <div className="text-xs md:text-sm font-semibold text-primary mb-1">Zoho Mail</div>
              <div className="text-lg md:text-2xl font-bold text-foreground">Email bảo mật</div>
            </div>
            <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-border">
              <div className="text-xs md:text-sm font-semibold text-primary mb-1">Zoho Cliq</div>
              <div className="text-lg md:text-2xl font-bold text-foreground">Chat & Họp</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-primary">
          <span className="text-xs font-medium">Cuộn để xem thêm</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
