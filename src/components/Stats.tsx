import React from "react";

interface Stat {
  value: string;
  label: string;
  colorClass?: string;
}

interface StatsProps {
  stats: Stat[];
  className?: string;
}

export const Stats: React.FC<StatsProps> = ({ stats, className }) => (
  <div className={`rounded-2xl bg-gray-50 p-8 md:p-12 ${className ?? ''}`}>
    <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
      {stats.map((stat, i) => (
        <div key={stat.label + i}>
          <div className={`mb-2 text-3xl font-bold md:text-4xl ${stat.colorClass ?? "text-primary-600"}`}>{stat.value}</div>
          <div className="font-medium text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
);
