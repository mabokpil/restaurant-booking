'use client'

import { useRouter } from 'next/navigation'

interface Props {
  id: number
}

export default function DeleteButton({ id }: Props) {
  const router = useRouter()

  return (
    <button
      onClick={async () => {
        await fetch(`/api/reservations/${id}`, { method: 'DELETE' })
        router.refresh()
      }}
      className="text-red-500 text-sm"
    >
      삭제
    </button>
  )
}
