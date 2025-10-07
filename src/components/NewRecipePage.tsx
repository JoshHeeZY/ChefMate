import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { ChevronLeft } from 'lucide-react';

interface NewRecipePageProps {
  onNavigate: (page: string) => void;
}

export function NewRecipePage({ onNavigate }: NewRecipePageProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    time: '',
    servings: '',
    imageUrl: '',
    ingredients: '',
    instructions: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to a database
    console.log('Recipe submitted:', formData);
    alert('Recipe submitted successfully!');
    onNavigate('recipes');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => onNavigate('recipes')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Recipes
          </button>
          <h1 className="mb-2">Add New Recipe</h1>
          <p className="text-gray-600">
            Share your culinary creation with the community
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Recipe Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Recipe Title</Label>
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="e.g., Grandma's Chocolate Chip Cookies"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Tell us about your recipe..."
                value={formData.description}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            {/* Time and Servings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="time">Cooking Time</Label>
                <Input
                  id="time"
                  name="time"
                  type="text"
                  placeholder="e.g., 30 min"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="servings">Servings</Label>
                <Input
                  id="servings"
                  name="servings"
                  type="text"
                  placeholder="e.g., 4 servings"
                  value={formData.servings}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                id="imageUrl"
                name="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                value={formData.imageUrl}
                onChange={handleChange}
              />
              <p className="text-sm text-gray-500">Optional: Add a link to an image of your dish</p>
            </div>

            {/* Ingredients */}
            <div className="space-y-2">
              <Label htmlFor="ingredients">Ingredients</Label>
              <Textarea
                id="ingredients"
                name="ingredients"
                placeholder="List your ingredients (one per line)..."
                value={formData.ingredients}
                onChange={handleChange}
                rows={6}
                required
              />
            </div>

            {/* Instructions */}
            <div className="space-y-2">
              <Label htmlFor="instructions">Instructions</Label>
              <Textarea
                id="instructions"
                name="instructions"
                placeholder="Step-by-step cooking instructions..."
                value={formData.instructions}
                onChange={handleChange}
                rows={8}
                required
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1">
                Publish Recipe
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => onNavigate('recipes')}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}