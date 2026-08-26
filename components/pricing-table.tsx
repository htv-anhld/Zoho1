'use client'

import { Check, Minus, Star } from 'lucide-react'
import { CTAButton } from './cta-button'

interface Plan {
  name: string
  label: string
  highlighted?: boolean
  price: string
  rows: {
    mailbox: string
    teamStorage: string
    office: string
    meeting: string
    unique: string
    fit: string
  }
}

const plans: Plan[] = [
  {
    name: 'Mail Lite',
    label: 'Chỉ cần email công ty',
    price: 'Liên hệ',
    rows: {
      mailbox: '5 GB hoặc 10 GB mỗi người',
      teamStorage: 'Không có',
      office: 'Không có',
      meeting: 'Chỉ có Cliq bản miễn phí',
      unique: 'Dùng được Outlook, lịch, danh bạ, công việc',
      fit: 'Doanh nghiệp chỉ cần email công ty, chưa cần làm việc chung trên tài liệu',
    },
  },
  {
    name: 'Workplace Standard',
    label: 'PHỔ BIẾN NHẤT',
    highlighted: true,
    price: 'Liên hệ',
    rows: {
      mailbox: '30 GB mỗi người',
      teamStorage: '100 GB cho nhóm 3–10 người, thêm 10 GB mỗi người tiếp theo',
      office: 'Có',
      meeting: 'Cliq đầy đủ, Meeting tới 100 người',
      unique: 'Quản lý mật khẩu (Vault), quản lý tài khoản tập trung (Directory)',
      fit: 'Phần lớn doanh nghiệp 20–500 nhân sự',
    },
  },
  {
    name: 'Workplace Professional',
    label: 'Cho nhu cầu cao',
    price: 'Liên hệ',
    rows: {
      mailbox: '100 GB mỗi người, cộng 100 GB lưu trữ dự phòng',
      teamStorage: '1 TB cho nhóm 3–10 người, thêm 100 GB mỗi người tiếp theo',
      office: 'Có',
      meeting: 'Cliq đầy đủ, Meeting tới 250 người',
      unique: 'Lưu trữ và truy xuất email phục vụ tuân thủ, mã hóa S/MIME, mạng nội bộ nhân viên (Connect)',
      fit: 'Doanh nghiệp cần lưu trữ email lâu dài, có yêu cầu tuân thủ, hoặc làm việc nhiều với file nặng',
    },
  },
]

const featureRows: { key: keyof Plan['rows']; label: string }[] = [
  { key: 'mailbox', label: 'Hộp thư' },
  { key: 'teamStorage', label: 'Kho tài liệu chung' },
  { key: 'office', label: 'Bộ Office (Writer, Sheet, Show)' },
  { key: 'meeting', label: 'Chat và họp trực tuyến' },
  { key: 'unique', label: 'Điểm riêng của gói' },
  { key: 'fit', label: 'Phù hợp với' },
]

function RowValue({ value }: { value: string }) {
  if (value === 'Không có') {
    return (
      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
        <Minus size={15} className="flex-shrink-0" />
        {value}
      </span>
    )
  }
  if (value === 'Có') {
    return (
      <span className="inline-flex items-center gap-1.5 font-medium text-primary">
        <Check size={16} className="flex-shrink-0" />
        {value}
      </span>
    )
  }
  return <span>{value}</span>
}

export default function PricingTable() {
  return (
    <section id="bang-gia" className="py-16 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-14 md:mb-20 animate-fade-up">
          <div className="mb-5 inline-block rounded-full bg-primary/10 px-4 py-2">
            <span className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
              Bảng giá
            </span>
          </div>
          <h2 className="mb-4 font-heading text-4xl md:text-5xl font-bold leading-tight tracking-tight text-foreground text-balance">
            Bảng giá Zoho Workplace tại Connecta
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-pretty">
            Giá tính theo mỗi người dùng, thanh toán theo năm. Đã bao gồm triển khai, chuyển dữ liệu và hỗ trợ tiếng Việt.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid gap-6 lg:grid-cols-3 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border bg-white p-7 md:p-8 transition-all duration-300 animate-fade-up ${
                plan.highlighted
                  ? 'border-primary shadow-[0_28px_60px_-24px_rgba(55,75,107,0.5)] lg:-mt-4 lg:mb-4 ring-1 ring-primary/20'
                  : 'border-border shadow-sm hover:-translate-y-1 hover:shadow-md'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-md">
                    <Star size={13} className="fill-white" />
                    {plan.label}
                  </span>
                </div>
              )}

              {/* Plan head */}
              <div className="mb-6 border-b border-border pb-6">
                {!plan.highlighted && (
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {plan.label}
                  </p>
                )}
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-heading text-3xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">đ / người / tháng</span>
                </div>
              </div>

              {/* Feature list */}
              <dl className="flex-1 space-y-4">
                {featureRows.map((row) => (
                  <div key={row.key}>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {row.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-foreground text-pretty">
                      <RowValue value={plan.rows[row.key]} />
                    </dd>
                  </div>
                ))}
              </dl>

              {/* CTA */}
              <div className="mt-8 w-full">
                <CTAButton
                  href="#lead-form"
                  variant={plan.highlighted ? 'primary' : 'secondary'}
                  fullWidth
                >
                  Nhận báo giá
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
