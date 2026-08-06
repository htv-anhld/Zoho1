'use client'

import { Coins, FolderTree, Users, ShieldCheck } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const painPoints: {
  icon: typeof Coins
  title: string
  desc: string
}[] = [
  {
    icon: Coins,
    title: 'Chi phí phần mềm ngày càng tăng',
    desc: 'Trả phí cho nhiều công cụ nhưng chưa khai thác hết giá trị.',
  },
  {
    icon: FolderTree,
    title: 'Dữ liệu nằm rải rác nhiều nơi',
    desc: 'Email, tài liệu và cuộc trao đổi bị phân tán trên nhiều nền tảng.',
  },
  {
    icon: Users,
    title: 'Làm việc nhóm thiếu đồng bộ',
    desc: 'Nhiều phiên bản tài liệu, khó cộng tác và dễ bỏ sót thông tin.',
  },
  {
    icon: ShieldCheck,
    title: 'Thiếu người đồng hành triển khai',
    desc: 'Mua bản quyền thì dễ, nhưng triển khai và vận hành mới là thách thức.',
  },
]

// Vertical rhythm offsets (lg+): higher / lower / higher / lower
const offsetClasses = ['lg:-mt-6', 'lg:mt-6', 'lg:-mt-6', 'lg:mt-6']

export default function PainPoints() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const anyHovered = hovered !== null

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-40"
      style={{
        background:
          'radial-gradient(120% 90% at 50% 0%, #FFFFFF 0%, #FAFBFC 55%, #F4F6F9 100%)',
      }}
    >
      {/* Blueprint dot-grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(#374B6B 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.04,
        }}
      />
      {/* Blurred gradient decoration circles */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-24 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: '#374B6B', opacity: 0.06 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 h-[460px] w-[460px] rounded-full blur-3xl"
        style={{ background: '#A4B8CE', opacity: 0.07 }}
      />

      <div className="container relative mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div
          className="mx-auto max-w-[640px] text-center transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-primary/15 bg-white/60 px-4 py-2 shadow-sm backdrop-blur-md">
            <span className="text-xs font-semibold tracking-[0.18em] text-primary">
              WHY CHANGE?
            </span>
          </div>
          <h2 className="mb-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-[3.25rem] text-balance">
            Doanh nghiệp của bạn có đang gặp những vấn đề này?
          </h2>
          <p className="mx-auto max-w-[600px] text-lg leading-relaxed text-muted-foreground text-pretty">
            Những khó khăn tưởng chừng nhỏ nhưng đang làm giảm năng suất và tăng chi phí vận hành mỗi ngày.
          </p>
        </div>

        {/* Cards */}
        <div
          className="relative mt-16 md:mt-24"
          onMouseLeave={() => setHovered(null)}
        >
          {/* Glowing connector line */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 lg:block"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, #A4B8CE 20%, #374B6B 50%, #A4B8CE 80%, transparent 100%)',
              opacity: anyHovered ? 0.55 : 0.18,
              boxShadow: anyHovered ? '0 0 12px 1px rgba(55,75,107,0.35)' : 'none',
              transition: 'opacity 300ms ease, box-shadow 300ms ease',
            }}
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:items-start">
            {painPoints.map((point, i) => {
              const Icon = point.icon
              const isDimmed = anyHovered && hovered !== i
              return (
                <div
                  key={point.title}
                  className={`${offsetClasses[i]} transition-all duration-700 ease-out`}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(28px)',
                    transitionDelay: `${150 + i * 80}ms`,
                  }}
                >
                  <article
                    onMouseEnter={() => setHovered(i)}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-border/70 bg-white/70 p-8 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-2.5 hover:scale-[1.02] hover:border-primary hover:bg-white hover:shadow-[0_28px_55px_-18px_rgba(55,75,107,0.35)]"
                    style={{
                      opacity: isDimmed ? 0.9 : 1,
                      boxShadow: '0 8px 24px -16px rgba(55,75,107,0.25)',
                    }}
                  >
                    {/* Large transparent index number */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-4 right-2 font-heading text-[7rem] font-bold leading-none text-primary transition-opacity duration-300"
                      style={{ opacity: isDimmed ? 0.03 : 0.05 }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Icon */}
                    <div className="relative z-10 mb-7">
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-[8deg]"
                        style={{
                          background:
                            'radial-gradient(circle at 30% 25%, #A4B8CE 0%, #374B6B 100%)',
                          boxShadow:
                            'inset 0 2px 6px rgba(255,255,255,0.35), inset 0 -3px 8px rgba(0,0,0,0.18), 0 8px 20px -8px rgba(55,75,107,0.5)',
                        }}
                      >
                        <Icon size={28} className="text-white" strokeWidth={1.75} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 mb-3 font-heading text-lg font-bold leading-snug text-foreground text-balance">
                      {point.title}
                    </h3>

                    {/* Description */}
                    <p className="relative z-10 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {point.desc}
                    </p>
                  </article>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
