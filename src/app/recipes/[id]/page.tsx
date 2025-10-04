import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function RecipeDetail({ params }: { params: { id: string } }) {
  const recipe = await prisma.recipe.findUnique({ where: { id: params.id } });
  if (!recipe) return notFound();

  const ingredients = recipe.ingredients.split("\n").filter(Boolean);
  const steps = recipe.steps.split("\n").filter(Boolean);

  return (
    <div>
      <h2>{recipe.title}</h2>
      {recipe.imageUrl ? <img src={recipe.imageUrl} alt="" style={{ maxWidth: "100%", borderRadius: 12 }} /> : null}
      {recipe.description ? <p style={{ whiteSpace: "pre-wrap" }}>{recipe.description}</p> : null}
      <h3>Ingredients</h3>
      <ul>{ingredients.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
      <h3>Steps</h3>
      <ol>{steps.map((s, idx) => <li key={idx}>{s}</li>)}</ol>
      {recipe.tags.length ? <p><strong>Tags:</strong> {recipe.tags.join(", ")}</p> : null}
      <p className="small">Created: {new Date(recipe.createdAt).toLocaleString()}</p>
    </div>
  );
}