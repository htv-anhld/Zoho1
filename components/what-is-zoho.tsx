'use client'

import { Repeat, Building2, ReceiptText } from 'lucide-react'
import { CTAButton } from './cta-button'

const cards: {
  index: string
  icon: typeof Repeat
  title: string
  desc: string
}[] = [
  {
    index: '01',
    icon: Repeat,
    title: 'Thay thế cái gì',
    desc: 'Thay cho Google Workspace, Microsoft 365, hoặc tình trạng mỗi phòng ban dùng một công cụ khác nhau. Một hợp đồng, một nhà cung cấp, một trang quản trị.',
  },
  {
    index: '02',
    icon: Building2,
    title: 'Dành cho ai',
    desc: 'Doanh nghiệp có đội ngũ dùng email công ty hằng ngày và cần làm việc chung trên tài liệu. Toàn bộ nhân sự dùng chung một nền tảng, quản trị viên cấp và thu hồi tài khoản tập trung.',
  },
  {
    index: '03',
    icon: ReceiptText,
    title: 'Mua theo hình thức nào',
    desc: 'Thuê bao tính theo số người dùng, theo năm. Thêm hoặc bớt nhân sự đều điều chỉnh được. Connecta ký hợp đồng và xuất hóa đơn VAT tại Việt Nam.',
  },
]

export default function WhatIsZoho() {
  return (
    <section id="zoho-workplace-la-gi" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-14 md:mb-20 animate-fade-up">
          <div className="mb-5 inline-block rounded-full bg-primary/10 px-4 py-2">
            <span className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
              Zoho Workplace là gì?
            </span>
          </div>
          <h2 className="mb-4 font-heading text-4xl md:text-5xl font-bold leading-tight tracking-tight text-foreground text-balance">
            Zoho Workplace là gì?
          </h2>
          <p className="mb-6 text-lg md:text-xl font-medium text-primary text-pretty">
            Bộ email và văn phòng trọn gói cho doanh nghiệp, thay thế Google Workspace và Microsoft 365
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-pretty">
            Zoho Workplace là bộ ứng dụng làm việc dành cho doanh nghiệp, do hãng phần mềm Zoho phát triển. Mỗi nhân viên có một tài khoản duy nhất, gồm email theo tên miền công ty, bộ soạn thảo văn bản – bảng tính – trình chiếu, chat nội bộ, họp trực tuyến và kho tài liệu chung. Cách dùng gần như giống hệt Google Workspace hoặc Microsoft 365, nhưng chi phí thấp hơn đáng kể.
          </p>
        </div>

        {/* Three cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-14 md:mb-16">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <article
                key={card.index}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_24px_50px_-20px_rgba(55,75,107,0.35)] animate-fade-up"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <span className="font-heading text-3xl font-bold text-primary/20 transition-colors duration-300 group-hover:text-primary/30">
                    {card.index}
                  </span>
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                  {card.desc}
                </p>
              </article>
            )
          })}
        </div>

        {/* Closing line + buttons */}
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <p className="mb-8 text-base md:text-lg leading-relaxed text-foreground text-pretty">
            Zoho Workplace là phần mềm. Connecta là đơn vị đưa nó vào doanh nghiệp của bạn: khảo sát, chuyển dữ liệu, đào tạo và hỗ trợ bằng tiếng Việt.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton href="#features" variant="secondary">
              Xem có những ứng dụng gì
            </CTAButton>
            <CTAButton href="#lead-form" variant="primary">
              Nhận tư vấn miễn phí
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
