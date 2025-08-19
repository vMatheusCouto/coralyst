import { InputHTMLAttributes } from "react";

export interface AvatarTypes {
  size: "sm" | "md" | "lg";
  className?: string;
  src: string;
}

export interface SeparatorTypes {
  className?: string;
  direction: "horizontal" | "vertical";
}

export interface BadgeTypes {
  className?: string;
  style: "filled" | "outline" | "destructive";
  children: React.ReactNode;
}

export interface InputTypes extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  style: "default" | "ghost";
}
