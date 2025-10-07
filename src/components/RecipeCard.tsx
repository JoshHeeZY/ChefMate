import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Clock, Users } from 'lucide-react';

interface RecipeCardProps {
  image: string;
  title: string;
  description: string;
  time: string;
  servings: string;
}

export function RecipeCard({ image, title, description, time, servings }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
      <div className="aspect-[4/3] overflow-hidden">
        <ImageWithFallback 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center gap-4 mb-4 text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span className="text-sm">{servings}</span>
          </div>
        </div>
        <Button variant="outline" className="w-full">Read More</Button>
      </div>
    </div>
  );
}
