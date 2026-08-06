import { Coins, FolderTree, Users, ShieldCheck } from 'lucide-react'

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

export default function PainPoints() {
  return (
    <section className="py-16 md:py-32 bg-[#FAFBFC]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-up">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">PAIN POINT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading text-balance">
            Doanh nghiệp của bạn có đang gặp những vấn đề này?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Những khó khăn tưởng chừng nhỏ nhưng đang làm giảm năng suất và tăng chi phí vận hành mỗi ngày.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="group flex flex-col rounded-[20px] border border-border bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_20px_40px_-12px_rgba(55,75,107,0.25)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/25 transition-transform duration-300 ease-out group-hover:scale-110">
                  <Icon size={26} className="text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground font-heading leading-snug text-balance">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                  {point.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
