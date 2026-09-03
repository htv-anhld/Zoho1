'use client'

import { Mail, MessageCircle, FolderOpen, FileText, Video, Users, MonitorSmartphone, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

interface ProductContent {
  tagline: string
  description: string
  features: string[]
  benefit: string
  accentColor: string
}

interface AppNode {
  id: string
  icon: React.ReactNode
  title: string
  accent: string
  accentLight: string
  badge?: string
  content: ProductContent
}

const EcosystemVisualization = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  const appNodes: AppNode[] = [
    {
      id: 'mail',
      icon: <Mail className="w-6 h-6" />,
      title: 'Zoho Mail',
      accent: '#ef4444',
      accentLight: '#fee2e2',
      content: {
        tagline: 'Email doanh nghiệp bảo mật theo tên miền riêng.',
        description: 'Giải pháp Email chuyên nghiệp dành cho doanh nghiệp với khả năng bảo mật cao, không quảng cáo và quản trị tập trung.',
        features: ['Email theo tên miền riêng', 'Chống Spam & Phishing', 'Mã hóa dữ liệu cấp doanh nghiệp'],
        benefit: 'Giúp doanh nghiệp xây dựng hình ảnh chuyên nghiệp và bảo vệ dữ liệu Email.',
        accentColor: '#ef4444',
      },
    },
    {
      id: 'cliq',
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Zoho Cliq',
      accent: '#22c55e',
      accentLight: '#dcfce7',
      content: {
        tagline: 'Nền tảng chat và cộng tác nội bộ.',
        description: 'Trao đổi công việc theo thời gian thực giữa các phòng ban với chat, gọi thoại và video tích hợp.',
        features: ['Chat theo nhóm & dự án', 'Voice & Video Call', 'Chia sẻ tệp nhanh'],
        benefit: 'Tăng tốc độ trao đổi công việc và giảm phụ thuộc vào các ứng dụng chat bên ngoài.',
        accentColor: '#22c55e',
      },
    },
    {
      id: 'workdrive',
      icon: <FolderOpen className="w-6 h-6" />,
      title: 'Zoho WorkDrive',
      accent: '#3b82f6',
      accentLight: '#dbeafe',
      content: {
        tagline: 'Lưu trữ và quản lý tài liệu tập trung.',
        description: 'Không gian lưu trữ Cloud dành cho doanh nghiệp với khả năng phân quyền và cộng tác an toàn.',
        features: ['Cloud Storage', 'Phân quyền truy cập', 'Đồng bộ & chia sẻ tài liệu'],
        benefit: 'Quản lý toàn bộ tài liệu doanh nghiệp tại một nơi duy nhất.',
        accentColor: '#3b82f6',
      },
    },
    {
      id: 'office',
      icon: <FileText className="w-6 h-6" />,
      title: 'Zoho Writer • Sheet • Show',
      accent: '#f97316',
      accentLight: '#fed7aa',
      content: {
        tagline: 'Bộ ứng dụng văn phòng cộng tác trực tuyến.',
        description: 'Soạn thảo văn bản, bảng tính và trình chiếu ngay trên trình duyệt với khả năng cộng tác thời gian thực.',
        features: ['Writer', 'Sheet', 'Show', 'Real-time Collaboration'],
        benefit: 'Thay thế Microsoft Office với khả năng cộng tác trên Cloud.',
        accentColor: '#f97316',
      },
    },
    {
      id: 'meeting',
      icon: <Video className="w-6 h-6" />,
      title: 'Zoho Meeting',
      accent: '#a855f7',
      accentLight: '#f3e8ff',
      content: {
        tagline: 'Họp trực tuyến và Webinar bảo mật.',
        description: 'Giải pháp họp trực tuyến dành cho doanh nghiệp với chia sẻ màn hình, ghi hình và Webinar tích hợp.',
        features: ['Video Meeting', 'Webinar', 'Screen Sharing', 'Recording'],
        benefit: 'Giúp đội ngũ kết nối và cộng tác hiệu quả ở mọi nơi.',
        accentColor: '#a855f7',
      },
    },
    {
      id: 'connect',
      icon: <Users className="w-6 h-6" />,
      title: 'Zoho Connect',
      accent: '#ec4899',
      accentLight: '#fce7f3',
      content: {
        tagline: 'Mạng xã hội nội bộ dành cho doanh nghiệp.',
        description: 'Nền tảng truyền thông nội bộ giúp nhân viên kết nối, chia sẻ kiến thức và xây dựng văn hóa doanh nghiệp.',
        features: ['Thông báo nội bộ', 'Nhóm phòng ban', 'Thảo luận', 'Cộng đồng nhân viên'],
        benefit: 'Gia tăng sự gắn kết và truyền thông nội bộ hiệu quả.',
        accentColor: '#ec4899',
      },
    },
    {
      id: 'trident',
      icon: <MonitorSmartphone className="w-6 h-6" />,
      title: 'Zoho Trident',
      accent: '#6366f1',
      accentLight: '#e0e7ff',
      badge: 'NEW',
      content: {
        tagline: 'Workspace Desktop hợp nhất toàn bộ Zoho Workplace.',
        description: 'Ứng dụng Desktop giúp truy cập Email, Chat, Lịch và tài liệu trên cùng một giao diện duy nhất.',
        features: ['Email', 'Chat', 'Calendar', 'Documents'],
        benefit: 'Tăng năng suất làm việc nhờ mọi công cụ đều nằm trong một ứng dụng.',
        accentColor: '#6366f1',
      },
    },
  ]

  // Position nodes in orbit around center using angles
  const getNodePosition = (index: number, total: number) => {
    const angle = (index / total) * Math.PI * 2 - Math.PI / 2
    const radius = 280
    const x = 400 + radius * Math.cos(angle)
    const y = 320 + radius * Math.sin(angle)
    return { x, y }
  }

  const activeProduct = hoveredNode ? appNodes.find(n => n.id === hoveredNode) : null

  return (
    <section id="features" className="py-14 md:py-20 bg-white overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-secondary/10 via-transparent to-transparent opacity-40" />
      </div>

      <div className="container px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-10 animate-fade-up">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">CÁC ỨNG DỤNG TRONG ZOHO WORKPLACE</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-4 mb-6 leading-tight max-w-3xl mx-auto">
            Zoho Workplace gồm những ứng dụng nào?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Di chuột vào từng ứng dụng để xem ứng dụng đó làm gì và mang lại lợi ích gì cho doanh nghiệp của bạn.
          </p>
        </div>

        {/* Ecosystem Visualization */}
        <div className="flex justify-center mb-20">
          <div className="relative w-full" style={{ maxWidth: '900px', height: '700px' }}>
            {/* SVG Connection Lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 800 640"
              preserveAspectRatio="xMidYMid meet"
              style={{ pointerEvents: 'none' }}
            >
              {/* Curved connection lines from center to each node */}
              {appNodes.map((node, index) => {
                const pos = getNodePosition(index, appNodes.length)
                const isHovered = hoveredNode === node.id
                return (
                  <path
                    key={`line-${node.id}`}
                    d={`M 400 320 Q ${(400 + pos.x) / 2} ${(320 + pos.y) / 2 - 40} ${pos.x} ${pos.y}`}
                    stroke={isHovered ? node.accent : '#d1d5db'}
                    strokeWidth={isHovered ? 2.5 : 1.5}
                    fill="none"
                    strokeLinecap="round"
                    className="transition-all duration-300"
                    opacity={isHovered ? 0.8 : 0.3}
                  />
                )
              })}
            </svg>

            {/* Center Dashboard - Live Preview Panel */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group cursor-pointer animate-fade-up"
              style={{ zIndex: 20 }}
            >
              <div className="w-80 bg-gradient-to-br from-white via-blue-50/30 to-white backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl p-6 hover:shadow-3xl transition-all duration-300 max-h-96 overflow-y-auto">
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex flex-col">
                  {activeProduct ? (
                    <>
                      {/* Product Header */}
                      <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 space-y-3">
                        <div className="flex items-start gap-2.5">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                            style={{ backgroundColor: activeProduct.content.accentColor }}
                          >
                            {activeProduct.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-foreground text-xs leading-tight">{activeProduct.title}</p>
                            <p className="text-xs text-muted-foreground leading-tight truncate">{activeProduct.content.tagline}</p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-foreground leading-snug line-clamp-2">{activeProduct.content.description}</p>

                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {activeProduct.content.features.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap"
                              style={{
                                backgroundColor: `${activeProduct.content.accentColor}15`,
                                color: activeProduct.content.accentColor,
                                border: `1px solid ${activeProduct.content.accentColor}30`,
                              }}
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* Business Benefit Box */}
                        <div
                          className="p-2.5 rounded-lg text-xs leading-snug text-foreground"
                          style={{
                            backgroundColor: `${activeProduct.content.accentColor}10`,
                            border: `1px solid ${activeProduct.content.accentColor}20`,
                          }}
                        >
                          {activeProduct.content.benefit}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Default View - Zoho Workplace logo */}
                      <div className="flex flex-col items-center justify-center py-6">
                        <Image
                          src="/zoho-logo.png"
                          alt="Zoho Workplace"
                          width={160}
                          height={64}
                          className="h-14 w-auto object-contain"
                          style={{ width: 'auto', height: '3.5rem' }}
                        />
                        <p className="mt-4 text-sm font-bold text-foreground">Zoho Workplace</p>
                        <div className="mt-1 h-px w-16 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                        <p className="mt-3 text-center text-xs text-muted-foreground italic">
                          Di chuột vào ứng dụng để khám phá chi tiết
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Center Label */}
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                <p className="text-sm font-bold text-foreground">Zoho Workplace</p>
                <p className="text-xs text-muted-foreground">Dashboard</p>
              </div>
            </div>

            {/* Orbiting Application Nodes */}
            {appNodes.map((node, index) => {
              const pos = getNodePosition(index, appNodes.length)
              const isHovered = hoveredNode === node.id
              const isDimmed = hoveredNode !== null && hoveredNode !== node.id

              return (
                <div
                  key={node.id}
                  className="absolute group"
                  style={{
                    left: `${(pos.x / 800) * 100}%`,
                    top: `${(pos.y / 640) * 100}%`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: isHovered ? 30 : 10,
                    opacity: isDimmed ? 0.6 : 1,
                    transition: 'opacity 300ms ease-out',
                  }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className="relative cursor-pointer">
                    <div
                      className="w-24 h-24 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-2 p-4"
                      style={{
                        backgroundColor: node.accentLight,
                        border: `2px solid ${node.accent}20`,
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                      }}
                    >
                      {/* Icon */}
                      <div
                        className="text-white p-2.5 rounded-xl transition-all duration-300"
                        style={{ backgroundColor: node.accent }}
                      >
                        {node.icon}
                      </div>

                      {/* Badge */}
                      {node.badge && (
                        <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-primary text-white text-xs font-bold rounded-full">
                          {node.badge}
                        </div>
                      )}
                    </div>

                    {/* Label Below - Show only name by default, full info on hover */}
                    <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 text-center whitespace-nowrap pointer-events-none">
                      <p className="text-sm font-bold text-foreground">{node.title}</p>
                      {isHovered && (
                        <p className="text-xs text-muted-foreground animate-in fade-in duration-300">{node.content.tagline}</p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-primary rounded-3xl p-12 md:p-16 text-white max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#lead-form"
              className="group inline-flex items-center justify-center gap-2 h-12 sm:h-[50px] lg:h-[52px] px-5 sm:px-[22px] lg:px-7 min-w-[220px] max-w-[320px] rounded-[14px] font-heading font-semibold text-[15px] lg:text-base tracking-[-0.2px] leading-none bg-white text-primary border border-white/60 shadow-[0_8px_20px_rgba(0,0,0,0.12),0_18px_40px_rgba(0,0,0,0.16)] transition-all duration-300 ease-out hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_28px_rgba(0,0,0,0.18),0_26px_56px_rgba(0,0,0,0.22)] active:scale-[0.98] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            >
              Yêu cầu Demo Zoho Workplace
              <ArrowRight size={18} strokeWidth={2.25} className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </a>
            <a
              href="#bang-gia"
              className="group inline-flex items-center justify-center gap-2 h-12 sm:h-[50px] lg:h-[52px] px-5 sm:px-[22px] lg:px-7 min-w-[220px] max-w-[320px] rounded-[14px] font-heading font-semibold text-[15px] lg:text-base tracking-[-0.2px] leading-none border border-white/40 text-white transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-white/10 active:scale-[0.98] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              Xem bảng giá
              <ArrowRight size={18} strokeWidth={2.25} className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export const WorkplaceFeatures = EcosystemVisualization
