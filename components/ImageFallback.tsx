import Image from "next/image";
import { useEffect, useState } from "react";

// https://stackoverflow.com/a/70544058/3877659

const ImageFallback = ({ src, fallbackSrc, alt, ...rest }: any) => {
  const [imgSrc, set_imgSrc] = useState(src);

  useEffect(() => {
    set_imgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      alt={alt}
      src={imgSrc}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Broken image
          set_imgSrc(fallbackSrc);
        }
      }}
      onErrorCapture={(e) => {
        set_imgSrc(fallbackSrc);
      }}
    />
  );
}

export default ImageFallback
