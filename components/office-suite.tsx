'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  FileText,
  Table2,
  Presentation,
  Sparkles,
  Share2,
  History,
  Users,
  BarChart3,
  LineChart,
  Cloud,
  Play,
  Circle,
} from 'lucide-react'
import { CTAButton } from './cta-button'

type AppKey = 'writer' | 'sheet' | 'show'

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

/* ---------- Shared dark-app chrome ---------- */

function AppFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0e141d]/95 text-slate-200 shadow-2xl backdrop-blur-sm">
      {children}
    </div>
  )
}

function TrafficDots() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
    </div>
  )
}

function Avatars({ names }: { names: string[] }) {
  return (
    <div className="flex -space-x-2">
      {names.map((n, i) => (
        <span
          key={n}
          className="flex h-6 w-6 items-center justify-center rounded-full border border-[#0e141d] text-[10px] font-semibold text-white"
          style={{ backgroundColor: i % 2 === 0 ? '#374B6B' : '#A4B8CE' }}
          title={n}
        >
          {n[0]}
        </span>
      ))}
    </div>
  )
}

/* ---------- STATE 1: Zoho Writer ---------- */

function WriterPreview() {
  return (
    <AppFrame>
      {/* Top toolbar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <div className="flex items-center gap-4">
          <TrafficDots />
          <div className="hidden items-center gap-3 text-[11px] text-slate-400 sm:flex">
            <span>File</span>
            <span>Edit</span>
            <span>Insert</span>
            <span>Format</span>
            <Sparkles size={13} className="text-[#A4B8CE]" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden rounded-full bg-[#374B6B] px-2.5 py-1 text-[10px] font-semibold text-white sm:inline">
            3 collaborators online
          </span>
          <button className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-slate-200">
            <Share2 size={12} className="mr-1 inline" />
            Share
          </button>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#A4B8CE] text-[10px] font-bold text-[#0e141d]">
            L
          </span>
        </div>
      </div>

      {/* Document area */}
      <div className="relative flex-1 overflow-hidden px-5 py-4">
        <div className="mx-auto max-w-md rounded-lg bg-white/[0.04] p-5 ring-1 ring-white/5">
          <h4 className="text-base font-bold text-white">Business Proposal 2026</h4>
          <div className="mt-3 h-2 w-3/4 rounded bg-white/15" />
          <div className="mt-2 h-2 w-full rounded bg-white/10" />
          <div className="mt-2 h-2 w-5/6 rounded bg-white/10" />
          <div className="mt-4 text-[11px] font-semibold text-[#A4B8CE]">Overview</div>
          <ul className="mt-2 space-y-1.5">
            {['Market analysis', 'Revenue projections', 'Growth strategy'].map((t) => (
              <li key={t} className="flex items-center gap-2 text-[11px] text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-[#374B6B]" />
                {t}
              </li>
            ))}
          </ul>
          {/* Cursor + comment */}
          <span className="mt-3 inline-block h-3 w-0.5 animate-pulse bg-[#A4B8CE] align-middle" />
        </div>

        {/* Status badge */}
        <div className="absolute left-5 top-4 flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] text-emerald-300">
          <Circle size={7} className="fill-emerald-400 text-emerald-400" />
          Auto Saved
        </div>

        {/* Collaborators */}
        <div className="absolute bottom-4 left-5 flex items-center gap-2">
          <Avatars names={['Lan', 'Minh', 'David']} />
          <span className="text-[10px] text-slate-400">editing</span>
        </div>

        {/* Version history */}
        <div className="absolute bottom-4 right-5 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-slate-300">
          <History size={12} className="text-[#A4B8CE]" />
          Version History
        </div>
      </div>
    </AppFrame>
  )
}

/* ---------- STATE 2: Zoho Sheet ---------- */

function SheetPreview() {
  const bars = [40, 65, 50, 80, 60, 90]
  return (
    <AppFrame>
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <div className="flex items-center gap-4">
          <TrafficDots />
          <span className="text-[11px] font-medium text-slate-300">Revenue Dashboard</span>
        </div>
        <span className="hidden rounded-full bg-[#374B6B] px-2.5 py-1 text-[10px] font-semibold text-white sm:inline">
          5 collaborators
        </span>
      </div>

      {/* Formula bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-1.5 text-[10px] text-slate-400">
        <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono">B4</span>
        <span className="font-mono">=SUM(B2:B3)*1.12</span>
      </div>

      <div className="relative flex flex-1 gap-3 overflow-hidden p-4">
        {/* Grid */}
        <div className="w-1/2">
          <div className="grid grid-cols-3 overflow-hidden rounded-md text-[10px] ring-1 ring-white/10">
            {Array.from({ length: 18 }).map((_, i) => {
              const header = i < 3
              const highlight = i === 7 || i === 13
              return (
                <div
                  key={i}
                  className={`border-b border-r border-white/5 px-2 py-1.5 ${
                    header
                      ? 'bg-white/10 font-semibold text-slate-200'
                      : highlight
                        ? 'bg-emerald-500/15 text-emerald-300'
                        : 'text-slate-400'
                  }`}
                >
                  {header ? ['Qtr', 'Rev', '+%'][i] : highlight ? '▲' : '—'}
                </div>
              )
            })}
          </div>
          <div className="mt-2 inline-flex rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] text-[#A4B8CE]">
            Pivot Table
          </div>
        </div>

        {/* Charts */}
        <div className="flex w-1/2 flex-col gap-3">
          <div className="rounded-md bg-white/[0.04] p-2 ring-1 ring-white/5">
            <div className="mb-1 flex items-center gap-1 text-[9px] text-slate-400">
              <BarChart3 size={10} /> Bar
            </div>
            <div className="flex h-12 items-end gap-1">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 origin-bottom rounded-sm bg-gradient-to-t from-[#374B6B] to-[#A4B8CE] transition-all duration-500"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-md bg-white/[0.04] p-2 ring-1 ring-white/5">
            <div className="mb-1 flex items-center gap-1 text-[9px] text-slate-400">
              <LineChart size={10} /> Line
            </div>
            <svg viewBox="0 0 100 40" className="h-10 w-full">
              <polyline
                points="0,32 20,26 40,30 60,14 80,18 100,6"
                fill="none"
                stroke="#A4B8CE"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Status */}
        <div className="absolute left-4 top-2 flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] text-emerald-300">
          <Circle size={7} className="fill-emerald-400 text-emerald-400" />
          Updated just now
        </div>

        {/* Cloud sync chip */}
        <div className="absolute bottom-3 right-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-slate-300">
          <Cloud size={12} className="text-[#A4B8CE]" />
          Cloud Sync Enabled
        </div>
      </div>
    </AppFrame>
  )
}

/* ---------- STATE 3: Zoho Show ---------- */

function ShowPreview() {
  return (
    <AppFrame>
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <div className="flex items-center gap-4">
          <TrafficDots />
          <span className="flex items-center gap-1.5 text-[10px] text-rose-300">
            <Circle size={7} className="fill-rose-400 text-rose-400" />
            Live Presentation
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1 rounded-full bg-[#374B6B] px-2.5 py-1 text-[10px] font-semibold text-white sm:inline-flex">
            <Users size={11} /> 12 viewers
          </span>
          <button className="flex items-center gap-1 rounded-md bg-[#A4B8CE] px-2.5 py-1 text-[10px] font-bold text-[#0e141d] shadow-[0_0_12px_rgba(164,184,206,0.5)]">
            <Play size={11} className="fill-[#0e141d]" />
            Present
          </button>
        </div>
      </div>

      <div className="relative flex flex-1 gap-3 overflow-hidden p-4">
        {/* Slides sidebar */}
        <div className="flex w-14 flex-col gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`aspect-video rounded ${
                i === 1
                  ? 'bg-[#374B6B] ring-2 ring-[#A4B8CE]'
                  : 'bg-white/[0.06] ring-1 ring-white/10'
              }`}
            />
          ))}
        </div>

        {/* Canvas */}
        <div className="flex flex-1 flex-col justify-center rounded-lg bg-gradient-to-br from-[#374B6B]/40 to-[#0e141d] p-5 ring-1 ring-white/10">
          <h4 className="text-balance text-base font-bold text-white">
            Digital Transformation Strategy
          </h4>
          <div className="mt-4 flex items-end gap-1.5">
            {[30, 55, 45, 75, 90].map((h, i) => (
              <div
                key={i}
                className="w-4 origin-bottom rounded-sm bg-[#A4B8CE]/80 transition-all duration-500"
                style={{ height: `${h * 0.5}px` }}
              />
            ))}
            <div className="ml-3 flex-1">
              <div className="flex items-center gap-1 text-[9px] text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-[#A4B8CE]" /> 2024
                <span className="ml-2 h-1.5 w-1.5 rounded-full bg-[#374B6B]" /> 2026
              </div>
            </div>
          </div>
        </div>

        {/* Ready badge */}
        <div className="absolute bottom-3 right-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-emerald-500/15 px-2.5 py-1 text-[10px] text-emerald-300">
          <Circle size={7} className="fill-emerald-400 text-emerald-400" />
          Ready to Present
        </div>
      </div>
    </AppFrame>
  )
}

/* ---------- Section ---------- */

export default function OfficeSuite() {
  const [active, setActive] = useState<AppKey>('writer')

  const previews: Record<AppKey, React.ReactNode> = {
    writer: <WriterPreview />,
    sheet: <SheetPreview />,
    show: <ShowPreview />,
  }

  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 animate-fade-up">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">ZOHO OFFICE SUITE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
            Bộ ứng dụng văn phòng quen thuộc.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Zoho Workplace không chỉ cung cấp Email doanh nghiệp mà còn mang đến bộ công cụ soạn thảo, bảng tính và trình chiếu cộng tác theo thời gian thực.
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
                {(['writer', 'sheet', 'show'] as AppKey[]).map((key) => (
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

            {/* Info Box */}
            <div className="bg-secondary/15 border border-secondary/30 rounded-2xl p-6 mt-8">
              <div className="flex gap-3 items-start">
                <Sparkles size={24} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2 text-foreground"><span className="font-bold">✔</span> Không cần cài Microsoft Office</p>
                  <p className="flex items-center gap-2 text-foreground"><span className="font-bold">✔</span> Làm việc trên mọi thiết bị</p>
                  <p className="flex items-center gap-2 text-foreground"><span className="font-bold">✔</span> Cộng tác theo thời gian thực</p>
                  <p className="flex items-center gap-2 text-foreground"><span className="font-bold">✔</span> Tự động lưu trên Cloud</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <CTAButton
                href="#comparison"
                variant="primary"
              >
                Khám phá Zoho Office Suite
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
