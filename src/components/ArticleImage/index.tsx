import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { ImageFragment } from '~/generated/sdk';

import { BlobWrapper } from '../BlobWrapper';

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
          <Image
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
