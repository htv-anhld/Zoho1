'use client'

import { Check, X, ArrowRight } from 'lucide-react'

interface ComparisonRow {
  criterion: string
  zoho: string
  connecta: string
}

const comparisonRows: ComparisonRow[] = [
  {
    criterion: 'Migration dữ liệu',
    zoho: 'Người dùng tự thực hiện hoặc làm việc với đội ngũ quốc tế.',
    connecta: 'Connecta hỗ trợ chuyển đổi Email, Drive và Danh bạ từ Google Workspace hoặc Microsoft 365 sang Zoho Workplace mà không làm gián đoạn hoạt động.',
  },
  {
    criterion: 'Hỗ trợ kỹ thuật',
    zoho: 'Chủ yếu làm việc qua hệ thống hỗ trợ toàn cầu.',
    connecta: 'Đội ngũ kỹ thuật tại Việt Nam hỗ trợ trực tiếp bằng tiếng Việt, phản hồi nhanh và đồng hành trong suốt quá trình sử dụng.',
  },
  {
    criterion: 'Đào tạo người dùng',
    zoho: 'Không có chương trình đào tạo riêng cho từng doanh nghiệp.',
    connecta: 'Hướng dẫn sử dụng Zoho Workplace cho quản trị viên và nhân viên sau khi triển khai.',
  },
  {
    criterion: 'Xuất hóa đơn VAT',
    zoho: 'Không phù hợp quy trình mua sắm của nhiều doanh nghiệp Việt Nam.',
    connecta: 'Hợp đồng và hóa đơn VAT đầy đủ theo quy định.',
  },
  {
    criterion: 'Gia hạn & Quản lý bản quyền',
    zoho: 'Doanh nghiệp tự quản lý license và gia hạn.',
    connecta: 'Connecta theo dõi thời hạn license, hỗ trợ mở rộng và gia hạn khi doanh nghiệp phát triển.',
  },
  {
    criterion: 'Đồng hành lâu dài',
    zoho: 'Chủ yếu hỗ trợ theo ticket.',
    connecta: 'Có đội ngũ tư vấn đồng hành lâu dài, hỗ trợ tối ưu hệ thống khi doanh nghiệp mở rộng.',
  },
]

const journeySteps = [
  'Khảo sát nhu cầu',
  'Triển khai & Migration',
  'Đào tạo người dùng',
  'Go Live',
  'Hỗ trợ lâu dài',
]

export default function WhyConnecta() {
  return (
    <section id="why-connecta" className="py-14 md:py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-sm font-bold text-primary uppercase tracking-wider mb-4">LỢI THẾ KHI CHỌN CONNECTA</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading leading-tight">
            Không chỉ bán bản quyền.
            <br />
            Connecta đồng hành cùng doanh nghiệp từ triển khai đến vận hành.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Zoho Workplace ở đâu cũng giống nhau.
            <br />
            Điều tạo nên khác biệt là đơn vị triển khai, hỗ trợ và đồng hành trong suốt quá trình sử dụng.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-16 animate-fade-up">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <div className="grid grid-cols-3 bg-white">
              {/* Header */}
              <div className="col-span-3 grid grid-cols-3 bg-white border-b border-border">
                <div className="p-6 font-bold text-foreground">Tiêu chí</div>
                <div className="p-6 font-bold text-foreground border-l border-border">Mua trực tiếp từ Zoho</div>
                <div className="p-6 font-bold text-white bg-primary">Triển khai qua Connecta</div>
              </div>

              {/* Rows */}
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="col-span-3">
                  <div className="grid grid-cols-3 hover:bg-primary/5 transition-colors duration-200">
                    <div className="p-6 font-semibold text-foreground border-b border-border">{row.criterion}</div>
                    <div className="p-6 border-l border-b border-border text-muted-foreground flex gap-3">
                      <X size={20} className="text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{row.zoho}</span>
                    </div>
                    <div className="p-6 bg-primary/5 border-l border-b border-border text-foreground flex gap-3">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{row.connecta}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Journey Timeline */}
        <div className="animate-fade-up">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12 font-heading">
            Hành trình triển khai Zoho Workplace cùng Connecta
          </h3>
          <div className="flex items-center justify-between gap-4 overflow-x-auto pb-4">
            {journeySteps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 flex-shrink-0">
                <div className="group flex flex-col items-center cursor-default transition-transform duration-300 ease-out hover:-translate-y-1.5">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary text-white flex items-center justify-center font-bold text-2xl md:text-3xl mb-4 shadow-md ring-4 ring-transparent transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-secondary group-hover:shadow-xl group-hover:ring-secondary/25">
                    {idx + 1}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-foreground text-center max-w-xs leading-tight transition-colors duration-300 group-hover:text-primary">
                    {step}
                  </div>
                </div>
                {idx < journeySteps.length - 1 && (
                  <div className="flex-shrink-0 hidden md:block">
                    <ArrowRight size={28} className="text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
