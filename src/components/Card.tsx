import React from "react";

interface CardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ href, icon, title, description, className }) => (
  <a
    href={href}
    className={`group transform rounded-lg bg-white p-6 shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg ${className ?? ''}`}
  >
    <div className="mb-4 text-primary-600">{icon}</div>
    <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary-600">
      {title}
    </h3>
    <p className="text-gray-600">{description}</p>
  </a>
);
