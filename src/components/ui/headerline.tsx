import React from "react";

interface HeaderlineProps {
  text: string;
}

export const Headerline: React.FC<HeaderlineProps> = ({ text }) => {
  return (
    <div className="flex items-center gap-4 py-8">
      <div className="h-px flex-1 bg-linear-to-r from-border/0 via-border to-border/0" />
      <span className="text-sm font-medium text-muted-foreground">{text}</span>
      <div className="h-px flex-1 bg-linear-to-r from-border/0 via-border to-border/0" />
    </div>
  );
};
