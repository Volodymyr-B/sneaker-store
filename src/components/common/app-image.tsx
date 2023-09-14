"use client";

import { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/tw-merge";
import { rgbDataURL } from "@/lib/utils/color-blur-url";

interface AppImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const AppImage: FC<AppImageProps> = ({ src, alt, className }) => {
  return (
    <div className={cn("relative aspect-[1/1] shadow-sm", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        placeholder="blur"
        blurDataURL={rgbDataURL(209, 213, 219)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};
