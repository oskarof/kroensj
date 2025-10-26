import React from "react";
import { Card } from "./Card";

export interface CardItem {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

interface CardGridProps {
  items: CardItem[];
  className?: string;
}

export const CardGrid: React.FC<CardGridProps> = ({ items, className }) => (
  <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ${className ?? ''}`}>
    {items.map((item, idx) => (
      <Card key={item.href + idx} {...item} />
    ))}
  </div>
);
