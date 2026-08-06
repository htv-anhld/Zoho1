'use client'

import { Mail, MessageCircle, Cloud } from 'lucide-react'

const features = [
  {
    title: 'Zoho Mail',
    description: 'Email doanh nghiệp bảo mật',
    icon: Mail,
  },
  {
    title: 'Zoho Cliq',
    description: 'Chat & Họp trực tuyến',
    icon: MessageCircle,
  },
  {
    title: 'Zoho WorkDrive',
    description: 'Lưu trữ & Cộng tác tài liệu',
    icon: Cloud,
  },
]

export default function FeatureCards() {
  return (
    <section id="features" className="py-16 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            Tính năng chính của Zoho Workplace
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tất cả những gì doanh nghiệp cần để hoạt động hiệu quả
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-up-delay">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 md:p-10 border border-border shadow-sm hover:shadow-xl hover:border-primary transition-all duration-300"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Icon size={32} className="text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-2 font-heading">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
