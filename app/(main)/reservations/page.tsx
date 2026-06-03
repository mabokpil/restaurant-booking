import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import ReservationForm from '@/components/reservations/ReservationForm'
import ReservationList from '@/components/reservations/ReservationList'
import { Separator } from '@/components/ui/separator'

export default async function ListPage() {
  // 로그인 안 했으면 홈으로 이동
  const session = await auth()
  if (!session) redirect('/')

  const reservations = await prisma.reservation.findMany({
    orderBy: { createdAt: 'desc' },
  })

  const total = reservations.length
  const confirmed = reservations.filter(
    (r: { status: string }) => r.status === 'confirmed'
  ).length
  const pending = reservations.filter(
    (r: { status: string }) => r.status === 'pending'
  ).length
  return (
    // 나머지 코드 그대로
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* 히어로 */}
      <div className="relative h-[60vh] flex flex-col items-center justify-center text-center px-4 border-b border-[#c9a96e]/20">
        <p className="text-[#c9a96e] text-sm tracking-[0.3em] uppercase mb-4 font-light">
          Seoul · Gangnam
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl font-light text-[#f0ebe3] tracking-widest mb-4">
          MINGLES
        </h1>
        <p className="text-[#888] text-sm tracking-[0.2em] uppercase">
          Fine Dining Reservation
        </p>
        <div className="absolute bottom-8 flex items-center gap-3">
          <div className="h-px w-12 bg-[#c9a96e]/40" />
          <p className="text-[#c9a96e] text-xs tracking-widest">
            RESERVE YOUR TABLE
          </p>
          <div className="h-px w-12 bg-[#c9a96e]/40" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* 통계 */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          <div className="border border-[#c9a96e]/20 rounded p-5 text-center">
            <p className="text-[#888] text-xs tracking-widest uppercase mb-2">
              Total
            </p>
            <p className="text-3xl font-[family-name:var(--font-cormorant)] text-[#f0ebe3]">
              {total}
            </p>
          </div>
          <div className="border border-[#c9a96e]/20 rounded p-5 text-center">
            <p className="text-[#888] text-xs tracking-widest uppercase mb-2">
              Pending
            </p>
            <p className="text-3xl font-[family-name:var(--font-cormorant)] text-[#c9a96e]">
              {pending}
            </p>
          </div>
          <div className="border border-[#c9a96e]/20 rounded p-5 text-center">
            <p className="text-[#888] text-xs tracking-widest uppercase mb-2">
              Confirmed
            </p>
            <p className="text-3xl font-[family-name:var(--font-cormorant)] text-green-400">
              {confirmed}
            </p>
          </div>
        </div>

        {/* 예약 폼 */}
        <div className="border border-[#c9a96e]/20 rounded p-8 mb-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#c9a96e] tracking-widest uppercase mb-6">
            New Reservation
          </h2>
          <Separator className="bg-[#c9a96e]/20 mb-6" />
          <ReservationForm />
        </div>

        {/* 예약 목록 */}
        <div className="border border-[#c9a96e]/20 rounded p-8">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#c9a96e] tracking-widest uppercase mb-6">
            Reservations
          </h2>
          <Separator className="bg-[#c9a96e]/20 mb-6" />
          <ReservationList reservations={reservations} />
        </div>
      </div>
    </div>
  )
}
