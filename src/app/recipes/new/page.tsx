"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewRecipePage() {
  const [form, setForm] = useState({ title: "", description: "", ingredients: "", steps: "", tags: "", imageUrl: "" });
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm(prev => ({ ...prev, [k]: v }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const res = await fetch("/api/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: form.title,
        description: form.description || null,
        ingredients: form.ingredients,
        steps: form.steps,
        tags: form.tags.split(",").map(s => s.trim()).filter(Boolean),
        imageUrl: form.imageUrl || null,
      })
    });
    setSaving(false);
    if (res.ok) {
      const { id } = await res.json();
      router.push(`/recipes/${id}`);
    } else {
      alert("Failed to save recipe");
    }
  }

  return (
    <div>
      <h2>New Recipe</h2>
      <form onSubmit={submit} style={{ maxWidth: 640 }}>
        <label>Title<input required value={form.title} onChange={e=>update("title", e.target.value)} /></label>
        <label>Description<textarea rows={4} value={form.description} onChange={e=>update("description", e.target.value)} /></label>
        <label>Ingredients (one per line)<textarea rows={6} value={form.ingredients} onChange={e=>update("ingredients", e.target.value)} /></label>
        <label>Steps (one per line)<textarea rows={6} value={form.steps} onChange={e=>update("steps", e.target.value)} /></label>
        <label>Tags (comma separated)<input value={form.tags} onChange={e=>update("tags", e.target.value)} placeholder="vegan, quick, dinner" /></label>
        <label>Image URL (optional)<input value={form.imageUrl} onChange={e=>update("imageUrl", e.target.value)} placeholder="https://..." /></label>
        <button disabled={saving}>{saving ? "Saving..." : "Create"}</button>
      </form>
    </div>
  );
}