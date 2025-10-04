import { prisma } from "@/lib/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function RecipesPage() {
  const recipes = await prisma.recipe.findMany({ orderBy: { createdAt: "desc" }, take: 100 });
  return (
    <div>
      <h2>All Recipes</h2>
      <div className="grid">
        {recipes.map(r => (
          <div className="card" key={r.id}>
            <strong>{r.title}</strong>
            <div className="small">{new Date(r.createdAt).toLocaleString()}</div>
            {r.imageUrl ? <img src={r.imageUrl} alt="" style={{ width: "100%", borderRadius: 8, marginTop: 8 }} /> : null}
            <p style={{ whiteSpace: "pre-wrap" }}>{(r.description ?? "").slice(0, 140)}{(r.description ?? "").length > 140 ? "…" : ""}</p>
            <div style={{ marginTop: 8 }}>
              <Link href={`/recipes/${r.id}`}>Open</Link>
            </div>
          </div>
        ))}
      </div>
      {recipes.length === 0 && <p>No recipes yet. Click “New Recipe”.</p>}
    </div>
  );
}