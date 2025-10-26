import React from "react";

interface IconListProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass?: string;
}

export const IconList: React.FC<IconListProps> = ({ icon, title, description, colorClass }) => (
  <div className="flex items-start">
    <div className={`mr-4 flex-shrink-0 rounded-lg p-3 ${colorClass ?? "bg-primary-100"}`}>
      {icon}
    </div>
    <div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);
