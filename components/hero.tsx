'use client'

import Image from 'next/image'
import { CTAButton } from './cta-button'

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 -z-10" />
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10 opacity-50" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 opacity-30" />

      <div className="container mx-auto px-4 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-2">
                <span className="text-xs font-semibold tracking-[0.12em] text-primary uppercase">
                  Connecta - Đối tác chính thức Tại Việt Nam
                </span>
              </div>
              <h1 className="font-bold text-4xl md:text-6xl leading-tight tracking-tight text-foreground mb-4 text-balance">
<span className="text-primary">Tiết kiệm hơn</span> với bộ công cụ làm việc toàn diện cho doanh nghiệp
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
<strong className="font-bold text-foreground">Zoho Workplace</strong> — bộ ứng dụng văn phòng toàn diện dành cho doanh nghiệp. Connecta triển khai trọn gói và đồng hành cùng doanh nghiệp tại Việt Nam.
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

          {/* Right - Real Zoho Workplace screenshot */}
          <div className="relative animate-fade-up-delay">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-white">
              <Image
                src="/zoho-workplace-real.png"
                alt="Giao diện thật của Zoho Workplace - Mail, Cliq, WorkDrive, Writer, Sheet"
                width={1264}
                height={812}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
