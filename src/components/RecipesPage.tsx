import { RecipeCard } from './RecipeCard';

interface Recipe {
  image: string;
  title: string;
  description: string;
  time: string;
  servings: string;
  isNew?: boolean;
}

interface RecipesPageProps {
  onNavigate: (page: string) => void;
}

export function RecipesPage({ onNavigate }: RecipesPageProps) {
  const allRecipes: Recipe[] = [
    {
      image: "https://images.unsplash.com/photo-1612390649890-9498b83d445c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwY2hpY2tlbiUyMGRpc2h8ZW58MXx8fHwxNzU5ODUxNzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Herb Roasted Chicken",
      description: "A perfectly seasoned roasted chicken with aromatic herbs and spices that will make your dinner unforgettable.",
      time: "45 min",
      servings: "4 servings"
    },
    {
      image: "https://images.unsplash.com/photo-1693422660544-014dd9f3ef73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc3RlYWslMjBtZWF0fGVufDF8fHx8MTc1OTc0NTY0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Grilled Beef Steak",
      description: "Tender and juicy grilled steak cooked to perfection with a savory marinade and fresh seasonings.",
      time: "30 min",
      servings: "2 servings"
    },
    {
      image: "https://images.unsplash.com/photo-1681330266932-391fd00f805f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NTk3NzQxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Rainbow Veggie Bowl",
      description: "A colorful and nutritious bowl packed with fresh vegetables, grains, and a delicious dressing.",
      time: "20 min",
      servings: "1 serving",
      isNew: true
    },
    {
      image: "https://images.unsplash.com/photo-1616632125404-33e2addbff09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBjb29raW5nfGVufDF8fHx8MTc1OTgxNzMyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Fresh Garden Medley",
      description: "Seasonal vegetables prepared with simple techniques to bring out their natural flavors and colors.",
      time: "25 min",
      servings: "3 servings"
    },
    {
      image: "https://images.unsplash.com/photo-1619568767436-645129f006d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2glMjBmb29kfGVufDF8fHx8MTc1OTg1MDMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Creamy Pasta Delight",
      description: "Rich and creamy pasta dish with a blend of herbs and cheese that melts in your mouth.",
      time: "35 min",
      servings: "4 servings",
      isNew: true
    },
    {
      image: "https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMHByZXB8ZW58MXx8fHwxNzU5ODI2OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Healthy Meal Prep",
      description: "Balanced and nutritious meal prep ideas that save time and keep you energized throughout the week.",
      time: "40 min",
      servings: "6 servings"
    },
    {
      image: "https://images.unsplash.com/photo-1636743713732-125909a35dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBwYW5jYWtlc3xlbnwxfHx8fDE3NTk3NzY1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Fluffy Pancakes",
      description: "Light and airy pancakes perfect for a weekend breakfast, served with maple syrup and fresh berries.",
      time: "15 min",
      servings: "2 servings",
      isNew: true
    },
    {
      image: "https://images.unsplash.com/photo-1611464357429-a34ac648a5e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwZGlzaHxlbnwxfHx8fDE3NTk4MzkxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Seafood Platter",
      description: "Fresh seafood selection featuring shrimp, fish, and shellfish with a zesty lemon butter sauce.",
      time: "35 min",
      servings: "3 servings"
    },
    {
      image: "https://images.unsplash.com/photo-1680090966824-eb9e8500bc2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZXxlbnwxfHx8fDE3NTk4MzkxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Chocolate Layer Cake",
      description: "Decadent chocolate cake with multiple layers and rich frosting, perfect for celebrations.",
      time: "60 min",
      servings: "8 servings",
      isNew: true
    },
    {
      image: "https://images.unsplash.com/photo-1701109876066-7fc0c08da447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VwJTIwYm93bHxlbnwxfHx8fDE3NTk4MjE4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Hearty Vegetable Soup",
      description: "Warm and comforting soup loaded with fresh vegetables and aromatic herbs.",
      time: "40 min",
      servings: "4 servings"
    }
  ];

  const newRecipes = allRecipes.filter(recipe => recipe.isNew);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onNavigate('home')}
              className="text-gray-700 hover:text-gray-900 underline transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('recipes')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Recipes
            </button>
            <button 
              onClick={() => onNavigate('new-recipe')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              New Recipe
            </button>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="mb-4">Recipes App</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A minimal starter for your food recipes site. Use the nav to add/browse recipes.
          </p>
        </div>
      </section>

      {/* New Recipes Section */}
      {newRecipes.length > 0 && (
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="mb-6">New Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {newRecipes.map((recipe, index) => (
                <RecipeCard key={index} {...recipe} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Recipes Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="mb-6">All Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allRecipes.map((recipe, index) => (
              <RecipeCard key={index} {...recipe} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
