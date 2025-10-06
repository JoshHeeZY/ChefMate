import Link from 'next/link';
import { prisma } from '@/lib/db';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

type Recipe = {
  id: string;
  title: string;
  description?: string | null;
};

export const getServerSideProps: GetServerSideProps<{ recipes: Recipe[] }> = async () => {
  const recipes = await prisma.recipe.findMany({
    select: { id: true, title: true, description: true },
  });
  return { props: { recipes: JSON.parse(JSON.stringify(recipes)) } };
};

export default function RecipesPage({
  recipes,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main style={{ padding: 24 }}>
      <h1>All Recipes</h1>
      <ul>
        {recipes.map((r) => (
          <li key={r.id}>
            <Link href={`/recipes/${r.id}`}>{r.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
