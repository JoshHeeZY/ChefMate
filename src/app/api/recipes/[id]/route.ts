import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const recipe = await prisma.recipe.findUnique({ where: { id: params.id } });
  if (!recipe) return NextResponse.json({ error: "not found" }, { status: 404 });
  return NextResponse.json(recipe);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  const recipe = await prisma.recipe.update({ where: { id: params.id }, data: body });
  return NextResponse.json(recipe);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.recipe.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}