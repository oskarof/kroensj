import React from "react";


interface TitleProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  removeTopSpace?: boolean;
}

const Title: React.FC<TitleProps> = ({ title, highlight, subtitle, removeTopSpace = false }) => (
  <div
    className={`mb-16 text-center animate-slide-up${removeTopSpace ? '' : ' pt-16'}`}
  >
    <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
      {title} {highlight && <span className="text-primary-600">{highlight}</span>}
    </h2>
    {subtitle && (
      <p className="mx-auto max-w-3xl text-xl text-gray-600">{subtitle}</p>
    )}
  </div>
);

export default Title;
