import React from 'react';
import {
  Utensils,
  ShoppingBag,
  Home,
  Car,
  Bus,
  Fuel,
  HeartPulse,
  Pill,
  Gamepad2,
  Tv,
  Film,
  GraduationCap,
  BookOpen,
  Briefcase,
  TrendingUp,
  Laptop,
  Coins,
  CreditCard,
  DollarSign,
  Gift,
  Sparkles,
  Tag,
  MoreHorizontal,
  LucideIcon,
} from 'lucide-react';

export const ICON_MAP: Record<string, LucideIcon> = {
  Utensils,
  ShoppingBag,
  Home,
  Car,
  Bus,
  Fuel,
  HeartPulse,
  Pill,
  Gamepad2,
  Tv,
  Film,
  GraduationCap,
  BookOpen,
  Briefcase,
  TrendingUp,
  Laptop,
  Coins,
  CreditCard,
  DollarSign,
  Gift,
  Sparkles,
  Tag,
  MoreHorizontal,
};

export const AVAILABLE_ICONS = Object.keys(ICON_MAP);

interface CategoryIconProps {
  name?: string;
  size?: number;
  className?: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({ name, size = 18, className = '' }) => {
  const IconComponent = (name && ICON_MAP[name]) || Tag;
  return <IconComponent size={size} className={className} />;
};
