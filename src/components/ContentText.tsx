import React from "react";

interface ContentTextProps {
  heading: React.ReactNode;
  text: React.ReactNode;
  image: string;
  imageAlt?: string;
  imageClassName?: string;
  imageLeft?: boolean;
  className?: string;
}

export const ContentText: React.FC<ContentTextProps> = ({ heading, text, image, imageAlt, imageClassName, imageLeft = false, className }) => (
  <section className={`w-full py-16 ${className ?? ''}`}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
      <div className={imageLeft ? 'lg:order-2' : ''}>
        <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">{heading}</h2>
        <div className="text-lg text-gray-700 leading-relaxed">{text}</div>
      </div>
      <div className={`relative ${imageLeft ? 'lg:order-1' : ''}`}>
        <img
          src={image}
          alt={imageAlt ?? ''}
          className={`w-full rounded-2xl object-cover shadow-2xl ${imageClassName ?? ''}`}
        />
      </div>
    </div>
  </section>
);
