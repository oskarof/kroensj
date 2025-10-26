import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  highlight?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, highlight, className }) => {
  return (
    <h2 className={`mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl ${className ?? ''}`}>
      {children}
      {highlight && (
        <span className="text-primary-600">{highlight}</span>
      )}
    </h2>
  );
};
