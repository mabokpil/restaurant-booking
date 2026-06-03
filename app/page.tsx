import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* 히어로 */}
      <div className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-6">
          Seoul · Gangnam · Since 2014
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-7xl md:text-[120px] font-light text-[#f0ebe3] tracking-[0.2em] mb-6">
          MINGLES
        </h1>
        <p className="text-[#666] text-xs tracking-[0.3em] uppercase mb-12">
          Contemporary Korean Fine Dining
        </p>
        <Link
          href="/reservations"
          className="border border-[#c9a96e] text-[#c9a96e] px-12 py-4 text-xs tracking-[0.4em] uppercase hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-all duration-500"
        >
          Reserve a Table
        </Link>

        {/* 하단 정보 */}
        <div className="absolute bottom-12 flex gap-16 text-center">
          <div>
            <p className="text-[#c9a96e] text-xs tracking-widest uppercase mb-1">
              Hours
            </p>
            <p className="text-[#666] text-xs tracking-wider">Tue — Sun</p>
            <p className="text-[#666] text-xs tracking-wider">12:00 — 21:00</p>
          </div>
          <div className="w-px bg-[#c9a96e]/20" />
          <div>
            <p className="text-[#c9a96e] text-xs tracking-widest uppercase mb-1">
              Location
            </p>
            <p className="text-[#666] text-xs tracking-wider">Gangnam-gu</p>
            <p className="text-[#666] text-xs tracking-wider">Seoul, Korea</p>
          </div>
          <div className="w-px bg-[#c9a96e]/20" />
          <div>
            <p className="text-[#c9a96e] text-xs tracking-widest uppercase mb-1">
              Contact
            </p>
            <p className="text-[#666] text-xs tracking-wider">02-515-7306</p>
            <p className="text-[#666] text-xs tracking-wider">
              info@mingles.kr
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
