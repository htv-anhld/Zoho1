'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  FileText,
  Table2,
  Presentation,
  HardDrive,
} from 'lucide-react'
import { CTAButton } from './cta-button'

type AppKey = 'writer' | 'sheet' | 'show' | 'workdrive'

const features: {
  key: AppKey
  title: string
  desc: string
  icon: typeof FileText
  iconWrap: string
  iconColor: string
}[] = [
  {
    key: 'writer',
    title: 'Zoho Writer',
    desc: 'Soạn thảo văn bản trực tuyến với giao diện quen thuộc, hỗ trợ nhiều người chỉnh sửa cùng lúc và lưu lịch sử phiên bản.',
    icon: FileText,
    iconWrap: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    key: 'sheet',
    title: 'Zoho Sheet',
    desc: 'Làm việc với bảng tính mạnh mẽ, hỗ trợ công thức, biểu đồ và cộng tác theo thời gian thực.',
    icon: Table2,
    iconWrap: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    key: 'show',
    title: 'Zoho Show',
    desc: 'Tạo và trình bày slide trực tuyến, chia sẻ nhanh và cộng tác cùng nhóm mà không cần cài đặt phần mềm.',
    icon: Presentation,
    iconWrap: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
]

/* ---------- STATE 1: Zoho Writer ---------- */

function WriterPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-white shadow-lg">
      <Image
        src="/zoho-writer-screenshot.png"
        alt="Giao diện thật của Zoho Writer đang chỉnh sửa tài liệu"
        fill
        className="object-cover object-top"
      />
    </div>
  )
}

/* ---------- STATE 2: Zoho Sheet ---------- */

function SheetPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-white shadow-lg">
      <Image
        src="/zoho-sheet-screenshot.png"
        alt="Giao diện thật của Zoho Sheet với bảng danh sách công việc và biểu đồ"
        fill
        className="object-cover object-top"
      />
    </div>
  )
}

/* ---------- STATE 3: Zoho Show ---------- */

function ShowPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-white shadow-lg">
      <Image
        src="/zoho-show-screenshot.png"
        alt="Giao diện thật của Zoho Show với thư viện mẫu bài trình chiếu"
        fill
        className="object-cover object-top"
      />
    </div>
  )
}

function WorkDrivePreview() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-white shadow-lg">
      <Image
        src="/zoho-workdrive-screenshot.png"
        alt="Giao diện thật của Zoho WorkDrive với danh sách tệp và nhãn"
        fill
        className="object-cover object-top"
      />
    </div>
  )
}

/* ---------- Section ---------- */

export default function OfficeSuite() {
  const [active, setActive] = useState<AppKey>('writer')

  const previews: Record<AppKey, React.ReactNode> = {
    writer: <WriterPreview />,
    sheet: <SheetPreview />,
    show: <ShowPreview />,
    workdrive: <WorkDrivePreview />,
  }

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 animate-fade-up">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">CHUYỂN ĐỔI CÓ KHÓ KHÔNG</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
            Bộ ứng dụng văn phòng quen thuộc.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Giao diện và thao tác gần như giống Word, Excel, PowerPoint. Phần lớn nhân viên dùng được ngay trong buổi đầu tiên.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-12">
          {/* Left - Interactive monitor preview */}
          <div className="animate-fade-up order-2 md:order-1">
            <div
              className={`group relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-border transition-all duration-300 ${
                active === 'writer' ? 'brightness-110' : ''
              }`}
            >
              {/* Monitor image (never changes) */}
              <Image
                src="/dashboard-mockup.png"
                alt="Zoho Writer, Sheet, Show - Office Suite"
                fill
                className="object-cover"
              />
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />

              {/* Live app preview inside the monitor */}
              <div className="absolute inset-0 p-3 md:p-4">
                {(['writer', 'sheet', 'show', 'workdrive'] as AppKey[]).map((key) => (
                  <div
                    key={key}
                    aria-hidden={active !== key}
                    className={`absolute inset-3 md:inset-4 transition-all duration-300 ease-out ${
                      active === key
                        ? 'opacity-100 blur-0 scale-100 translate-y-0'
                        : 'pointer-events-none opacity-0 blur-sm scale-95 translate-y-2'
                    }`}
                  >
                    {previews[key]}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div className="animate-fade-up-delay order-1 md:order-2 space-y-6">
            {features.map(({ key, title, desc, icon: Icon, iconWrap, iconColor }) => {
              const isActive = active === key
              return (
                <div
                  key={key}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  onMouseEnter={() => setActive(key)}
                  onFocus={() => setActive(key)}
                  onClick={() => setActive(key)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActive(key)
                    }
                  }}
                  className={`cursor-pointer rounded-2xl border p-4 transition-all duration-300 ${
                    isActive
                      ? 'border-primary bg-primary/5 shadow-sm'
                      : 'border-transparent hover:border-primary/40 hover:bg-primary/5'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex-shrink-0 w-14 h-14 ${iconWrap} rounded-xl flex items-center justify-center transition-transform duration-300 ${
                        isActive ? 'scale-110' : 'group-hover:scale-105'
                      }`}
                    >
                      <Icon size={28} className={iconColor} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-3">{desc}</p>
                </div>
              )
            })}

            {/* Zoho WorkDrive Box */}
            <div
              role="button"
              tabIndex={0}
              aria-pressed={active === 'workdrive'}
              onMouseEnter={() => setActive('workdrive')}
              onFocus={() => setActive('workdrive')}
              onClick={() => setActive('workdrive')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActive('workdrive')
                }
              }}
              className={`cursor-pointer rounded-2xl border p-4 transition-all duration-300 ${
                active === 'workdrive'
                  ? 'border-primary bg-primary/5 shadow-sm'
                  : 'border-transparent hover:border-primary/40 hover:bg-primary/5'
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex-shrink-0 w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center transition-transform duration-300 ${
                    active === 'workdrive' ? 'scale-110' : ''
                  }`}
                >
                  <HardDrive size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Zoho WorkDrive</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Kho lưu trữ và cộng tác tài liệu chung cho cả nhóm.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <CTAButton
                href="#bang-gia"
                variant="primary"
              >
                Xem chi phí từng gói
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
