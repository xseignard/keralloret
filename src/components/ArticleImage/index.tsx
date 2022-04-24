import React, { useEffect, useRef, useState } from 'react';

import { ImageFragment } from '~/generated/sdk';

import { BlobWrapper } from '../BlobWrapper';
import { GalleryImage } from '../GalleryImage';

export const ArticleImage = ({ image }: { image: ImageFragment }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();
  const [width, setWidth] = useState<number>();
  useEffect(() => {
    if (ref.current) {
      const newWidth = ref.current?.getBoundingClientRect().width;
      setWidth(newWidth);
      setHeight(Math.round(newWidth / image.responsiveImage.aspectRatio));
    }
  }, [image.responsiveImage]);

  return (
    <div ref={ref} className="w-full flex items-center">
      {width && height && (
        <BlobWrapper growth={0.95} style={{ width, height }}>
          <GalleryImage
            src={image.responsiveImage.src}
            layout="fill"
            objectFit="cover"
            alt={image.responsiveImage.alt}
          />
        </BlobWrapper>
      )}
    </div>
  );
};
