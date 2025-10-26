import React from "react";
import { cn } from "@/lib/utils";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ children, className }) => (
  <h1
    className={cn(
      "text-3xl md:text-5xl font-extrabold tracking-tight text-center text-primary-900 mb-8",
      className
    )}
  >
    {children}
  </h1>
);

export default Title;
