import Image from "next/image";

export function RemoteImage({
  src,
  alt,
  className,
  priority = false,
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={className} />;
}
