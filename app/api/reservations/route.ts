import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const reservations = await prisma.reservation.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(reservations)
}

export async function POST(req: Request) {
  const body = await req.json()
  const reservation = await prisma.reservation.create({
    data: {
      name: body.name,
      date: body.date,
      time: body.time,
      people: Number(body.people),
      status: 'pending', // 추가
    },
  })
  return NextResponse.json(reservation, { status: 201 })
}
