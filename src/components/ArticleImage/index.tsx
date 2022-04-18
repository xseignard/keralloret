import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { ResponsiveImage } from '~/generated/sdk';

import { BlobWrapper } from '../BlobWrapper';

export const ArticleImage = ({ image }: { image: ResponsiveImage }) => {
  const [height, setHeight] = useState<number>();
  const [width, setWidth] = useState<number>();
  useEffect(() => {
    const newWidth = Math.min(window.innerWidth, image.width);
    setWidth(newWidth);
    setHeight(Math.round(newWidth / image.aspectRatio));
  }, [image]);

  if (!width || !height) return null;
  return (
    <BlobWrapper style={{ width, height }}>
      <Image src={image.src} layout="fill" objectFit="cover" alt={image.alt} />
    </BlobWrapper>
  );
};
