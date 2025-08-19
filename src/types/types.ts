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
  type: "filled" | "outline" | "destructive";
  children: React.ReactNode;
}

export interface InputTypes {
  className?: string;
  type: "default" | "ghost";
  placeholder?: string;
}
