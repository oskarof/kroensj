import React from "react";

interface HeroButton {
  text: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  asChild?: boolean;
}

interface HeroSectionProps {
  title: string;
  highlight?: string;
  subtitle: string;
  backgroundImage: string;
  buttons: HeroButton[];
  scrollToId?: string;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  highlight,
  subtitle,
  backgroundImage,
  buttons,
  scrollToId,
  className,
}) => {
  return (
    <section className={`relative flex min-h-[85vh] items-center justify-center overflow-hidden ${className ?? ''}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Krønsj Training Studio - moderne treningsstudio"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            {title}
            {highlight && (
              <span className="block text-primary-400">{highlight}</span>
            )}
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-white md:text-2xl">
            {subtitle}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-nowrap">
            {buttons.map((btn, i) =>
              btn.href ? (
                <a
                  key={btn.text + i}
                  href={btn.href}
                  className={`inline-flex transform items-center justify-center rounded-full border px-5 py-2 text-base font-semibold transition-all duration-200 hover:-translate-y-1 focus:outline-none ${
                    btn.variant === "primary"
                      ? "bg-primary-600 border-primary-600 text-white hover:bg-primary-700"
                      : "bg-gray-600 border-gray-600 text-white hover:bg-gray-700"
                  } ${btn.className ?? ''}`}
                  aria-label={btn.text}
                >
                  <span>{btn.text}</span>
                  {btn.icon && <span className="ml-2">{btn.icon}</span>}
                </a>
              ) : (
                <button
                  key={btn.text + i}
                  onClick={btn.onClick}
                  className={`inline-flex transform items-center justify-center rounded-full border px-5 py-2 text-base font-semibold transition-all duration-200 hover:-translate-y-1 focus:outline-none ${
                    btn.variant === "primary"
                      ? "bg-primary-600 border-primary-600 text-white hover:bg-primary-700"
                      : "bg-gray-600 border-gray-600 text-white hover:bg-gray-700"
                  } ${btn.className ?? ''}`}
                  aria-label={btn.text}
                >
                  <span>{btn.text}</span>
                  {btn.icon && <span className="ml-2">{btn.icon}</span>}
                </button>
              )
            )}
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      {scrollToId && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce-subtle">
          <button
            type="button"
            className="text-white transition-colors hover:text-primary-400"
            aria-label="Scroll to section"
            onClick={() => {
              const el = document.getElementById(scrollToId);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};
