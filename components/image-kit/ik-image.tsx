"use client";

import Image from "next/image";

import { imageKitLoader } from "@/lib/image-kit-loader";

export interface IkImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
}
export const IkImage = (props: IkImageProps) => {
  return (
    <Image
      fill={props.fill}
      className={props.className}
      loader={imageKitLoader}
      src={props.src}
      alt={props.alt}
      width={props.width || 200}
      height={props.height || 200}
    />
  );
};
