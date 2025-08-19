import { AvatarTypes } from "#/types/types";
import Image from "next/image";

function Avatar({ size, className, src }: AvatarTypes) {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-24 h-24",
  };

  return (
    <Image
      src={src}
      alt="nome"
      height={0}
      width={150}
      className={`aspect-square rounded-full object-cover ${sizeMap[size]} ${className}`}
    />
  );
}

export { Avatar };
