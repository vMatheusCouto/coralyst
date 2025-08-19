import { InputTypes } from "#/types/types";

export default function Input({ type, className, placeholder }: InputTypes) {
  const typesMap = {
    default: "border border-accent border-1 px-4 py-2 rounded-sm",
    ghost: "",
  };
  return (
    <input
      id="input"
      placeholder={placeholder}
      className={`${typesMap[type]} w-full flex-1 focus:ring-0 focus:ring-offset-0 focus:outline-none ${className}`}
    />
  );
}
