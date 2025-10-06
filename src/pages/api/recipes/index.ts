// src/pages/api/recipes/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const {
      title,
      description,
      ingredients,
      steps,
      tags,
      imageUrl,
    } = (req.body ?? {}) as {
      title?: string;
      description?: string | null;
      ingredients?: string;
      steps?: string;
      tags?: string | string[];
      imageUrl?: string | null;
    };

    if (!title || !ingredients || !steps) {
      return res.status(400).json({ error: "title, ingredients and steps are required" });
    }

    // tags: accept "tag1, tag2" or ["tag1","tag2"] or empty
    const tagsArray =
      Array.isArray(tags)
        ? tags
        : typeof tags === "string"
          ? tags.split(",").map(t => t.trim()).filter(Boolean)
          : [];

    try {
      const recipe = await prisma.recipe.create({
        data: {
          title,
          description: description ?? null,
          ingredients,
          steps,
          tags: tagsArray,
          imageUrl: imageUrl ?? null, // data: URLs are fine
        },
      });
      return res.status(201).json(recipe);
    } catch (e) {
      console.error("Create recipe failed:", e);
      return res.status(500).json({ error: "Failed to create recipe" });
    }
  }

  if (req.method === "GET") {
    const recipes = await prisma.recipe.findMany();
    return res.status(200).json(recipes);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
