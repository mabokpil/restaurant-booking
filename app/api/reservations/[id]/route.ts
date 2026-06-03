import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params // 추가
  const body = await req.json()
  const item = await prisma.reservation.update({
    where: { id: Number(id) }, // params.id → id
    data: {
      name: body.name,
      date: body.date,
      time: body.time,
      people: Number(body.people),
    },
  })
  return NextResponse.json(item)
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params // await 필요
  await prisma.reservation.delete({
    where: { id: Number(id) },
  })
  return NextResponse.json({ ok: true })
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const body = await req.json()
  const item = await prisma.reservation.update({
    where: { id: Number(id) },
    data: { status: body.status },
  })
  return NextResponse.json(item)
}
