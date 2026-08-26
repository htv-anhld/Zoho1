'use client'

import Image from 'next/image'
import { CTAButton } from './cta-button'

export default function WhatIsZoho() {
  return (
    <section id="zoho-workplace-la-gi" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-14 md:mb-20 animate-fade-up">
          <div className="mb-5 inline-block rounded-full bg-primary/10 px-4 py-2">
            <span className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
              Tổng quan
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight tracking-tight text-foreground text-balance">
            Zoho Workplace là gì?
          </h2>
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
              <strong className="font-bold text-foreground">Zoho Workplace</strong> là một bộ ứng dụng All-in-one hoạt động dựa trên nền tảng đám mây với đầy đủ các công cụ cần thiết cho một tổ chức hoạt động và làm việc. Được xếp trong Top 3 các giải pháp chuyển đổi số cho doanh nghiệp vừa và nhỏ, Zoho Workplace hiện đã có hơn 16 triệu người dùng trên toàn cầu và đang có cơ hội phát triển lớn trong thời gian tới.
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground text-pretty">
              Là giải pháp chủ lực của Zoho, Zoho Workplace mang đến một không gian làm việc trực tuyến tiện lợi, cho phép người dùng có thể thoải mái làm việc mọi lúc mọi nơi, gặp gỡ và giao tiếp hiệu quả với đối tác, từ đó tăng hiệu quả công việc và đạt được mục tiêu đặt ra.
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
