import { InputTypes } from "#/types/types";

export default function Input({ style, className, placeholder }: InputTypes) {
  const stylesMap = {
    default: "border border-accent border-1 px-4 py-2 rounded-sm",
    ghost: "",
  };
  return (
    <input
      id="input"
      type=""
      placeholder={placeholder}
      className={`${stylesMap[style]} w-full flex-1 focus:ring-0 focus:ring-offset-0 focus:outline-none ${className}`}
    />
  );
}
