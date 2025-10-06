import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { prisma } from "@/lib/db";

type Recipe = {
  id: string;
  title: string;
  description: string | null;
  ingredients: string;
  steps: string;
  tags: string[] | null;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

export const getServerSideProps: GetServerSideProps<{ recipe: Recipe | null }> = async (context) => {
  const id = context.params?.id as string;
  const recipe = await prisma.recipe.findUnique({
    where: { id },
  });

  if (!recipe) {
    return { notFound: true };
  }

  return {
    props: {
      recipe: JSON.parse(JSON.stringify(recipe)),
    },
  };
};

export default function RecipePage({
  recipe,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!recipe) {
    return <main style={{ padding: 24 }}>Recipe not found.</main>;
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>{recipe.title}</h1>
      {recipe.description && <p>{recipe.description}</p>}
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Steps</h3>
      <p>{recipe.steps}</p>
    </main>
  );
}
