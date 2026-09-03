export default function WhoIsConnecta() {
  return (
    <section id="connecta-la-ai" className="py-14 md:py-20 bg-gradient-to-br from-secondary/15 via-primary/[0.06] to-primary/15">
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

          {/* Image */}
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

            <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[0_30px_60px_-25px_rgba(55,75,107,0.35)]">
              <img
                src="/connecta-team.png"
                alt="Đội ngũ Connecta Solutions đang làm việc tại văn phòng"
                className="aspect-[4/3] w-full object-cover"
              />

              {/* Brand badge overlay */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary">
                  <span className="font-heading text-2xl font-bold lowercase text-primary-foreground">c</span>
                </div>
                <div>
                  <p className="font-heading text-sm font-bold leading-tight text-foreground">Connecta Solutions</p>
                  <p className="text-xs text-muted-foreground">Digital Transformation Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
