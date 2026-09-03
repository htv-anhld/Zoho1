'use client'

import Image from 'next/image'
import { CTAButton } from './cta-button'

export default function WhatIsZoho() {
  return (
    <section id="zoho-workplace-la-gi" className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 md:mb-14 animate-fade-up">
          <div className="mb-5 inline-block rounded-full bg-primary/10 px-4 py-2">
            <span className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
              Tổng quan
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight tracking-tight text-foreground text-balance">
            Zoho Workplace là gì?
          </h2>
          <p className="mt-5 text-lg md:text-xl leading-relaxed text-muted-foreground text-pretty">
            Bộ email và văn phòng trọn gói cho doanh nghiệp, thay thế Google Workspace và Microsoft 365
          </p>
        </div>

        {/* Two-column: image left, text right */}
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Image with decorative shapes */}
          <div className="relative animate-fade-up">
            {/* Soft rounded backdrop shape */}
            <div
              className="absolute -bottom-6 -right-4 h-[85%] w-[80%] rounded-[2.5rem] bg-secondary/10"
              aria-hidden="true"
            />
            {/* Triangle accent */}
            <div
              className="absolute -top-5 -left-3 h-0 w-0 border-b-[36px] border-l-[26px] border-r-[26px] border-b-primary/25 border-l-transparent border-r-transparent"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_30px_60px_-25px_rgba(55,75,107,0.35)]">
              <Image
                src="/zoho-workplace-dashboard.png"
                alt="Giao diện bộ ứng dụng Zoho Workplace với Mail, Chat, Drive, lịch và ghi chú"
                width={960}
                height={640}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="animate-fade-up" style={{ animationDelay: '120ms' }}>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-pretty">
              <strong className="font-bold text-foreground">Zoho Workplace</strong> là bộ ứng dụng làm việc dành cho doanh nghiệp, do hãng phần mềm Zoho phát triển. Mỗi nhân viên có một tài khoản duy nhất, gồm email theo tên miền công ty, bộ soạn thảo văn bản – bảng tính – trình chiếu, chat nội bộ, họp trực tuyến và kho tài liệu chung. Cách dùng gần như giống hệt Google Workspace hoặc Microsoft 365, nhưng chi phí thấp hơn đáng kể.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <CTAButton href="#features" variant="secondary">
                Xem có những ứng dụng gì
              </CTAButton>
              <CTAButton href="#lead-form" variant="primary">
                Nhận tư vấn miễn phí
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
