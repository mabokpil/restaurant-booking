'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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

export default function ReservationForm() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', date: '', time: '', people: 1 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.date || !form.time) return
    await fetch('/api/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setForm({ name: '', date: '', time: '', people: 1 })
    router.refresh()
  }

  const inputClass =
    'w-full bg-transparent border border-[#c9a96e]/30 text-[#f0ebe3] placeholder-[#555] px-4 py-3 text-sm tracking-wider focus:outline-none focus:border-[#c9a96e] transition-colors'

  return (
    <div className="flex flex-col gap-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="GUEST NAME"
        className={inputClass}
      />
      <input
        name="date"
        value={form.date}
        onChange={handleChange}
        type="date"
        className={inputClass}
      />
      <Select
        value={form.time}
        onValueChange={v => setForm(prev => ({ ...prev, time: v }))}
      >
        <SelectTrigger className="w-full bg-transparent border border-[#c9a96e]/30 text-[#f0ebe3] rounded-none h-12 px-4 text-sm tracking-wider focus:ring-0 focus:border-[#c9a96e]">
          <SelectValue placeholder="SELECT TIME" />
        </SelectTrigger>
        <SelectContent className="bg-[#111] border border-[#c9a96e]/30 text-[#f0ebe3]">
          {TIME_SLOTS.map(t => (
            <SelectItem
              key={t}
              value={t}
              className="tracking-wider hover:bg-[#c9a96e]/10 focus:bg-[#c9a96e]/10"
            >
              {t}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <input
        name="people"
        value={form.people}
        onChange={handleChange}
        type="number"
        min={1}
        max={20}
        placeholder="GUESTS"
        className={inputClass}
      />
      <button
        onClick={handleSubmit}
        className="w-full border border-[#c9a96e] text-[#c9a96e] py-3 text-sm tracking-[0.3em] uppercase hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-all duration-300"
      >
        Reserve
      </button>
    </div>
  )
}
