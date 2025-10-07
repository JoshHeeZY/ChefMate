import { LucideIcon } from 'lucide-react';

interface FeatureIconProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export function FeatureIcon({ icon: Icon, label, value }: FeatureIconProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div className="text-sm text-gray-700">{label}</div>
      <div className="text-blue-900">{value}</div>
    </div>
  );
}
