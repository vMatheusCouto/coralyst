import { AvatarTypes } from "#/types/types";
import Image from "next/image";

function Avatar({ size, className, src }: AvatarTypes) {
  const sizeMap = {
    sm: 24,
    md: 40,
    lg: 64,
  };
  const sizeValue = sizeMap[size];

  return (
    <Image
      src={src}
      alt="nome"
      height={0}
      width={150}
      className={`aspect-square rounded-full object-cover w-${sizeValue} h-${sizeValue} ${className}`}
    />
  );
}

export { Avatar };
