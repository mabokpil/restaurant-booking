export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* 헤더 */}
        <div className="text-center mb-20">
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-[#f0ebe3] tracking-widest mb-6">
            CONTACT
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#c9a96e]/30" />
            <p className="text-[#666] text-xs tracking-widest">
              MINGLES · SEOUL
            </p>
            <div className="h-px w-16 bg-[#c9a96e]/30" />
          </div>
        </div>

        {/* 정보 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="border-t border-[#c9a96e]/20 pt-8">
            <p className="text-[#c9a96e] text-xs tracking-widest uppercase mb-4">
              Location
            </p>
            <p className="text-[#f0ebe3] text-sm tracking-wider mb-1">
              서울 강남구 청담동 99-3
            </p>
            <p className="text-[#666] text-xs tracking-wider">
              Cheongdam-dong, Gangnam-gu, Seoul
            </p>
          </div>

          <div className="border-t border-[#c9a96e]/20 pt-8">
            <p className="text-[#c9a96e] text-xs tracking-widest uppercase mb-4">
              Hours
            </p>
            <p className="text-[#f0ebe3] text-sm tracking-wider mb-1">
              Tue — Sun
            </p>
            <p className="text-[#666] text-xs tracking-wider mb-1">
              Lunch · 12:00 — 14:00
            </p>
            <p className="text-[#666] text-xs tracking-wider mb-3">
              Dinner · 18:00 — 21:00
            </p>
            <p className="text-[#555] text-xs tracking-wider">
              Closed on Mondays
            </p>
          </div>

          <div className="border-t border-[#c9a96e]/20 pt-8">
            <p className="text-[#c9a96e] text-xs tracking-widest uppercase mb-4">
              Contact
            </p>
            <p className="text-[#f0ebe3] text-sm tracking-wider mb-1">
              02-515-7306
            </p>
            <p className="text-[#666] text-xs tracking-wider">
              mingles@mingleseoul.com
            </p>
          </div>

          <div className="border-t border-[#c9a96e]/20 pt-8">
            <p className="text-[#c9a96e] text-xs tracking-widest uppercase mb-4">
              Social
            </p>

            <a
              href="https://www.instagram.com/mingleseoul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f0ebe3] text-sm tracking-wider hover:text-[#c9a96e] transition-colors"
            >
              @mingleseoul
            </a>
          </div>
        </div>

        {/* 예약 버튼 */}
        <div className="text-center border-t border-[#c9a96e]/10 pt-16">
          <p className="text-[#555] text-xs tracking-widest uppercase mb-6">
            Reservations are recommended
          </p>

          <a
            href="/reservations"
            className="inline-block border border-[#c9a96e] text-[#c9a96e] px-12 py-4 text-xs tracking-[0.4em] uppercase hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-all duration-500"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </main>
  )
}
