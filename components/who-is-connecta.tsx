export default function WhoIsConnecta() {
  return (
    <section id="connecta-la-ai" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div className="animate-fade-up">
            <div className="mb-5 inline-block rounded-full bg-primary/10 px-4 py-2">
              <span className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                Chúng tôi là ai
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight tracking-tight text-foreground text-balance">
              Kết Nối Công Nghệ
              <br />
              <span className="text-secondary">Với Doanh Nghiệp</span>
            </h2>

            <div className="mt-6 space-y-5">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-pretty">
                Được thành lập với sứ mệnh giúp các doanh nghiệp vừa và nhỏ Việt Nam tiếp cận và ứng dụng công nghệ hiệu quả, <strong className="font-semibold text-foreground">Connecta Solutions</strong> đã trở thành đối tác đáng tin cậy của hàng chục doanh nghiệp trong nhiều lĩnh vực.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground text-pretty">
                Đội ngũ của chúng tôi bao gồm các chuyên gia tư vấn, kỹ sư triển khai và chuyên viên hỗ trợ giàu kinh nghiệm, luôn sẵn sàng đồng hành cùng doanh nghiệp từ khâu khảo sát đến vận hành ổn định.
              </p>
            </div>

            {/* Stats */}
            <dl className="mt-10 flex flex-wrap gap-x-16 gap-y-6">
              <div>
                <dt className="font-heading text-4xl font-bold text-primary">50+</dt>
                <dd className="mt-1 text-sm text-muted-foreground">Dự án triển khai thành công</dd>
              </div>
              <div>
                <dt className="font-heading text-4xl font-bold text-primary">7+</dt>
                <dd className="mt-1 text-sm text-muted-foreground">Năm kinh nghiệm</dd>
              </div>
            </dl>
          </div>

          {/* Brand card */}
          <div className="relative animate-fade-up" style={{ animationDelay: '120ms' }}>
            {/* Decorative floating squares */}
            <div
              className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl bg-secondary/15"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-6 -right-6 h-28 w-28 rounded-2xl bg-primary/10"
              aria-hidden="true"
            />

            <div className="relative flex aspect-[4/3] flex-col items-center justify-center rounded-[2rem] border border-border bg-gradient-to-br from-white to-muted/40 shadow-[0_30px_60px_-25px_rgba(55,75,107,0.35)]">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-primary shadow-lg">
                <span className="font-heading text-5xl font-bold lowercase text-primary-foreground">c</span>
              </div>
              <p className="mt-6 font-heading text-2xl font-bold text-foreground">Connecta Solutions</p>
              <p className="mt-1 text-sm text-muted-foreground">Digital Transformation Partner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
