import { useState } from 'react';
import { RecipeCard } from './components/RecipeCard';
import { FeatureIcon } from './components/FeatureIcon';
import { RecipesPage } from './components/RecipesPage';
import { NewRecipePage } from './components/NewRecipePage';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { ChefHat, BookOpen, Users, Award, Utensils, Search } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const recipes = [
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
      servings: "1 serving"
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
      servings: "4 servings"
    },
    {
      image: "https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMHByZXB8ZW58MXx8fHwxNzU5ODI2OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Healthy Meal Prep",
      description: "Balanced and nutritious meal prep ideas that save time and keep you energized throughout the week.",
      time: "40 min",
      servings: "6 servings"
    }
  ];

  if (currentPage === 'recipes') {
    return <RecipesPage onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'new-recipe') {
    return <NewRecipePage onNavigate={setCurrentPage} />;
  }

  return (
    <div className="min-h-screen bg-[#f5f3ef]">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChefHat className="w-8 h-8" />
            <span className="text-xl">ChefMate</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => setCurrentPage('home')} className="hover:text-blue-400 transition-colors">Home</button>
            <button onClick={() => setCurrentPage('recipes')} className="hover:text-blue-400 transition-colors">Recipes</button>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1612390649890-9498b83d445c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwY2hpY2tlbiUyMGRpc2h8ZW58MXx8fHwxNzU5ODUxNzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      >
        <div className="text-center text-white max-w-3xl px-4">
          <div className="text-blue-400 mb-4">1312 × 70 Hugs</div>
          <h1 className="text-5xl md:text-6xl mb-6">UNLEASH CULINARY<br />EXCELLENCE</h1>
          <p className="text-lg mb-8 text-gray-200">
            Discover recipes that inspire and delight. Join our community of food lovers
            and explore a world of flavors.
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-6">
            Subscribe Now
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-blue-900 mb-4">OUR DIVERSE<br />PALETTE</h2>
            <p className="text-gray-600 max-w-2xl">
              From quick weeknight dinners to elaborate celebrations, we've got you covered
              with recipes for every occasion and skill level.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FeatureIcon icon={BookOpen} label="RECIPES" value="500+" />
            <FeatureIcon icon={Users} label="MEMBERS" value="10K+" />
            <FeatureIcon icon={Award} label="AWARDS" value="25+" />
            <FeatureIcon icon={Utensils} label="CUISINES" value="30+" />
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8">FEATURED RECIPES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.slice(0, 3).map((recipe, index) => (
              <RecipeCard key={index} {...recipe} />
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">EMBARK ON A<br />JOURNEY</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every recipe tells a story. Explore diverse cuisines and cooking techniques
              that will transform your kitchen adventures.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <RecipeCard key={index} {...recipe} />
            ))}
          </div>
        </div>
      </section>

      {/* Chronicle Section */}
      <section className="py-16" id="about">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-red-500 mb-6">OUR JOURNEY<br />CHRONICLE</h2>
              <p className="text-gray-700 mb-6">
                What started as a passion project has grown into a vibrant community of food
                enthusiasts from around the world. We believe in the power of good food to
                bring people together and create lasting memories.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of experienced chefs and home cooks work tirelessly to bring you
                tested recipes, helpful tips, and culinary inspiration that makes cooking
                both accessible and enjoyable.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1644762247881-c428e45d0fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwcGFuJTIwZmlyZXxlbnwxfHx8fDE3NTk4NTE3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cooking"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGtpdGNoZW58ZW58MXx8fHwxNzU5Nzc4MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Chef"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="pt-8">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGtpdGNoZW58ZW58MXx8fHwxNzU5Nzc4MjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Kitchen"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="bg-gradient-to-r from-red-400 to-orange-400 py-20" id="contact">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl mb-6">JOIN THE FUN<br />SUBSCRIBE NOW!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get exclusive recipes, cooking tips, and culinary inspiration delivered straight
            to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white text-gray-900 flex-1"
            />
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ChefHat className="w-6 h-6" />
                <span>ChefMate</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your culinary companion for everyday cooking excellence.
              </p>
            </div>
            <div>
              <h3 className="mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => setCurrentPage('recipes')} className="hover:text-white transition-colors">Recipes</button></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Breakfast</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lunch</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dinner</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Desserts</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Follow Us</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 ChefMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
