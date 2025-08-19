import { SeparatorTypes } from "#/types/types";

export default function Separator({ className, direction }: SeparatorTypes) {
  if (direction == "horizontal") {
    return (
      <div
        className={`w-full h-0 border-[0.01px] border-accent my-4 ${className}`}
      ></div>
    );
  } else {
    return <div className={`h-full w-1 stroke-1 ${className}`}></div>;
  }
}
