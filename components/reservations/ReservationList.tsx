'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Reservation {
  id: number
  name: string
  date: string
  time: string
  people: number
  status: string
}

interface Props {
  reservations: Reservation[]
}

const STATUS_MAP: Record<string, { label: string; color: string }> = {
  pending: { label: 'PENDING', color: 'text-[#c9a96e]' },
  confirmed: { label: 'CONFIRMED', color: 'text-green-400' },
  cancelled: { label: 'CANCELLED', color: 'text-red-400' },
}

const TIME_SLOTS = [
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
]

export default function ReservationList({ reservations }: Props) {
  const router = useRouter()
  const [editId, setEditId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState({
    name: '',
    date: '',
    time: '',
    people: 1,
  })

  const handleEdit = (item: Reservation) => {
    setEditId(item.id)
    setEditForm({
      name: item.name,
      date: item.date,
      time: item.time,
      people: item.people,
    })
  }

  const handleSave = async (id: number) => {
    await fetch(`/api/reservations/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editForm),
    })
    setEditId(null)
    router.refresh()
  }

  const handleDelete = async (id: number) => {
    if (!confirm('예약을 취소하시겠습니까?')) return
    await fetch(`/api/reservations/${id}`, { method: 'DELETE' })
    router.refresh()
  }

  const handleStatus = async (id: number, status: string) => {
    await fetch(`/api/reservations/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })
    router.refresh()
  }

  const inputClass =
    'w-full bg-transparent border-b border-[#c9a96e]/30 text-[#f0ebe3] px-0 py-1 text-sm tracking-wider focus:outline-none focus:border-[#c9a96e] transition-colors'

  if (reservations.length === 0) {
    return (
      <p className="text-[#555] text-sm tracking-widest text-center py-8">
        NO RESERVATIONS YET
      </p>
    )
  }

  return (
    <div className="flex flex-col divide-y divide-[#c9a96e]/10">
      {reservations.map(item => (
        <div key={item.id} className="py-6">
          {editId === item.id ? (
            <div className="flex flex-col gap-4">
              <input
                value={editForm.name}
                onChange={e =>
                  setEditForm(p => ({ ...p, name: e.target.value }))
                }
                className={inputClass}
                placeholder="GUEST NAME"
              />
              <input
                value={editForm.date}
                onChange={e =>
                  setEditForm(p => ({ ...p, date: e.target.value }))
                }
                type="date"
                className={inputClass}
              />
              <select
                value={editForm.time}
                onChange={e =>
                  setEditForm(p => ({ ...p, time: e.target.value }))
                }
                className="w-full bg-[#0a0a0a] border-b border-[#c9a96e]/30 text-[#f0ebe3] py-1 text-sm tracking-wider focus:outline-none"
              >
                {TIME_SLOTS.map(t => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <input
                value={editForm.people}
                onChange={e =>
                  setEditForm(p => ({ ...p, people: Number(e.target.value) }))
                }
                type="number"
                className={inputClass}
              />
              <div className="flex gap-4 mt-2">
                <button
                  onClick={() => handleSave(item.id)}
                  className="text-xs tracking-widest text-[#c9a96e] border border-[#c9a96e]/40 px-6 py-2 hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-all"
                >
                  SAVE
                </button>
                <button
                  onClick={() => setEditId(null)}
                  className="text-xs tracking-widest text-[#555] hover:text-[#f0ebe3] transition-colors"
                >
                  CANCEL
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#f0ebe3] tracking-wider mb-1">
                  {item.name}
                </p>
                <p className="text-[#666] text-xs tracking-widest">
                  {item.date} · {item.time} · {item.people} GUESTS
                </p>
                <p
                  className={`text-xs tracking-widest mt-2 ${STATUS_MAP[item.status]?.color ?? 'text-[#666]'}`}
                >
                  {STATUS_MAP[item.status]?.label ?? item.status}
                </p>
                {/* 상태 변경 버튼 */}
                <div className="flex gap-3 mt-3">
                  {item.status !== 'confirmed' && (
                    <button
                      onClick={() => handleStatus(item.id, 'confirmed')}
                      className="text-xs tracking-widest text-green-400 border border-green-400/30 px-3 py-1 hover:bg-green-400/10 transition-all"
                    >
                      CONFIRM
                    </button>
                  )}
                  {item.status !== 'cancelled' && (
                    <button
                      onClick={() => handleStatus(item.id, 'cancelled')}
                      className="text-xs tracking-widest text-red-400 border border-red-400/30 px-3 py-1 hover:bg-red-400/10 transition-all"
                    >
                      CANCEL
                    </button>
                  )}
                  {item.status !== 'pending' && (
                    <button
                      onClick={() => handleStatus(item.id, 'pending')}
                      className="text-xs tracking-widest text-[#c9a96e] border border-[#c9a96e]/30 px-3 py-1 hover:bg-[#c9a96e]/10 transition-all"
                    >
                      PENDING
                    </button>
                  )}
                </div>
              </div>
              <div className="flex gap-6 mt-1">
                <button
                  onClick={() => handleEdit(item)}
                  className="text-xs tracking-widest text-[#666] hover:text-[#c9a96e] transition-colors"
                >
                  EDIT
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-xs tracking-widest text-[#666] hover:text-red-400 transition-colors"
                >
                  DELETE
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
