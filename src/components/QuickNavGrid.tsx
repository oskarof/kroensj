import React from "react";
import { QuickNavCard } from "./QuickNavCard";

export interface QuickNavItem {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

interface QuickNavGridProps {
  items: QuickNavItem[];
  className?: string;
}

export const QuickNavGrid: React.FC<QuickNavGridProps> = ({ items, className }) => (
  <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ${className ?? ''}`}>
    {items.map((item, idx) => (
      <QuickNavCard key={item.href + idx} {...item} />
    ))}
  </div>
);
