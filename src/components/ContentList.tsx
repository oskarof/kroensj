import React from "react";
import { IconList } from "./IconList";

interface ContentListFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass?: string;
}

interface ContentListProps {
  features: ContentListFeature[];
  image: string;
  imageAlt?: string;
  imageClassName?: string;
  imageLeft?: boolean;
  className?: string;
}

export const ContentList: React.FC<ContentListProps> = ({ features, image, imageAlt, imageClassName, imageLeft = false, className }) => (
  <section className={`w-full py-16 ${className ?? ''}`}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
      <div className={imageLeft ? 'lg:order-2' : ''}>
        {features.map((feature, i) => (
          <IconList key={feature.title + i} {...feature} />
        ))}
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
