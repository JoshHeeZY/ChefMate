import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const recipes = await prisma.recipe.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(recipes);
}

export async function POST(req: Request) {
  const { title, description, ingredients, steps, tags, imageUrl } = await req.json();
  if (!title || !ingredients || !steps) {
    return NextResponse.json({ error: "title, ingredients, steps required" }, { status: 400 });
  }
  const recipe = await prisma.recipe.create({
    data: {
      title,
      description: description ?? null,
      ingredients,
      steps,
      tags: Array.isArray(tags) ? tags : [],
      imageUrl: imageUrl ?? null,
    },
  });
  return NextResponse.json({ id: recipe.id });
}