import { BadgeTypes } from "#/types/types";

export default function Badge({ type, className, children }: BadgeTypes) {
  const typeMap = {
    filled: "bg-accent",
    outline: "border border-accent",
    destructive: "bg-red-900",
  };
  return (
    <div
      className={`${typeMap[type]} px-2 py-1 text-sm max-w-fit rounded-[.4rem] ${className}`}
    >
      {children}
    </div>
  );
}
