'use client'

import Image from 'next/image'
import { FileText, Table2, Presentation, Sparkles } from 'lucide-react'
import { CTAButton } from './cta-button'

export default function OfficeSuite() {
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
          {/* Left - Illustration */}
          <div className="animate-fade-up order-2 md:order-1">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-border">
              <Image
                src="/dashboard-mockup.png"
                alt="Zoho Writer, Sheet, Show - Office Suite"
                fill
                className="object-cover"
              />
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right - Features */}
          <div className="animate-fade-up-delay order-1 md:order-2 space-y-8">
            {/* Feature 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center">
                  <FileText size={28} className="text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Zoho Writer</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed ml-18">
                Soạn thảo văn bản trực tuyến với giao diện quen thuộc, hỗ trợ nhiều người chỉnh sửa cùng lúc và lưu lịch sử phiên bản.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                  <Table2 size={28} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Zoho Sheet</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed ml-18">
                Làm việc với bảng tính mạnh mẽ, hỗ trợ công thức, biểu đồ và cộng tác theo thời gian thực.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Presentation size={28} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Zoho Show</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed ml-18">
                Tạo và trình bày slide trực tuyến, chia sẻ nhanh và cộng tác cùng nhóm mà không cần cài đặt phần mềm.
              </p>
            </div>

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
