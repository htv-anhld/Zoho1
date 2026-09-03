'use client'

import { ArrowRight } from 'lucide-react'

const scenarios = [
  {
    icon: '🏢',
    title: 'Doanh nghiệp từ 20–500 nhân sự',
    description: 'Hệ thống đủ linh hoạt để phục vụ doanh nghiệp đang mở rộng quy mô và cần quản lý tập trung.',
    benefits: [
      'Quản lý người dùng tập trung',
      'Dễ dàng mở rộng license',
      'Phân quyền theo phòng ban'
    ]
  },
  {
    icon: '💰',
    title: 'Muốn tối ưu chi phí phần mềm',
    description: 'Giảm đáng kể chi phí sử dụng Email doanh nghiệp và bộ công cụ văn phòng so với Google Workspace hoặc Microsoft 365.',
    benefits: [
      'Chi phí thấp hơn',
      'Không phát sinh nhiều dịch vụ',
      'ROI rõ ràng'
    ]
  },
  {
    icon: '🌐',
    title: 'Làm việc từ xa hoặc nhiều chi nhánh',
    description: 'Toàn bộ nhân viên có thể cộng tác trên cùng một nền tảng ở bất kỳ đâu.',
    benefits: [
      'Làm việc mọi thiết bị',
      'Chia sẻ tài liệu tức thời',
      'Họp trực tuyến'
    ]
  },
  {
    icon: '🔒',
    title: 'Ưu tiên bảo mật dữ liệu doanh nghiệp',
    description: 'Kiểm soát Email, tài liệu và quyền truy cập tập trung giúp bảo vệ dữ liệu quan trọng.',
    benefits: [
      'Email bảo mật',
      'Phân quyền chi tiết',
      'Quản lý dữ liệu tập trung'
    ]
  }
]

export default function WhoIsZohoFor() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 animate-fade-up">
          <img
            src="/zoho-workplace-logo.png"
            alt="Zoho Workplace"
            className="mx-auto mb-6 h-11 md:h-14 w-auto"
          />
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">DOANH NGHIỆP NÀO NÊN SỬ DỤNG ZOHO WORKPLACE?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
            Zoho Workplace phù hợp với doanh nghiệp nào?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Không phải doanh nghiệp nào cũng có nhu cầu giống nhau. Nếu bạn đang gặp một trong những tình huống dưới đây, Zoho Workplace sẽ là lựa chọn đáng cân nhắc để tối ưu chi phí và nâng cao hiệu quả làm việc.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-up">
          {scenarios.map((scenario, idx) => (
            <div
              key={idx}
              className="group bg-white border border-border rounded-2xl p-8 md:p-10 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-6">{scenario.icon}</div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 font-heading">
                {scenario.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {scenario.description}
              </p>

              {/* Benefits List */}
              <div className="space-y-3 pt-6 border-t border-border">
                {scenario.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-3">
                    <span className="text-primary font-bold">✔</span>
                    <span className="text-foreground text-sm md:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between animate-fade-up">
          {/* Left - Small illustration */}
          <div className="hidden md:block flex-shrink-0">
            <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center text-4xl">
              ✨
            </div>
          </div>

          {/* Center - Content */}
          <div className="flex-grow">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-heading">
              Đã đến lúc doanh nghiệp của bạn làm việc hiệu quả hơn với chi phí thấp hơn.
            </h3>
            <p className="text-white/90 leading-relaxed">
              Connecta sẽ khảo sát nhu cầu, tư vấn giải pháp phù hợp và hỗ trợ triển khai Zoho Workplace từ A–Z.
            </p>
          </div>

          {/* Right - CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 w-full md:w-auto">
              <a
                href="#lead-form"
                className="group inline-flex items-center justify-center gap-2 h-12 sm:h-[50px] lg:h-[52px] px-5 sm:px-[22px] lg:px-7 min-w-[220px] rounded-[14px] whitespace-nowrap font-heading font-semibold text-[15px] lg:text-base tracking-[-0.2px] leading-none bg-white text-primary border border-white/60 shadow-[0_8px_20px_rgba(0,0,0,0.12),0_18px_40px_rgba(0,0,0,0.16)] transition-all duration-300 ease-out hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_12px_28px_rgba(0,0,0,0.18),0_26px_56px_rgba(0,0,0,0.22)] active:scale-[0.98] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                Nhận tư vấn miễn phí
                <ArrowRight size={18} strokeWidth={2.25} className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </a>
              <a
                href="#bang-gia"
                className="group inline-flex items-center justify-center gap-2 h-12 sm:h-[50px] lg:h-[52px] px-5 sm:px-[22px] lg:px-7 min-w-[220px] rounded-[14px] whitespace-nowrap font-heading font-semibold text-[15px] lg:text-base tracking-[-0.2px] leading-none border border-white/40 text-white transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-white/10 active:scale-[0.98] active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
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
