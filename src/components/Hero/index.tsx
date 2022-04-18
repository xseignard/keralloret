import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { ImageFragment } from '~/generated/sdk';

import { BlobWrapper } from '../BlobWrapper';

export const Hero = ({
  image,
  title,
  titleColor,
}: {
  image: ImageFragment;
  title: string;
  titleColor: string;
}) => {
  const [height, setHeight] = useState<number>();
  const [width, setWidth] = useState<number>();
  useEffect(() => {
    const newWidth = Math.min(window.innerWidth, 1280);
    setWidth(newWidth);
    setHeight(Math.round(newWidth / image.responsiveImage.aspectRatio));
  }, [image.responsiveImage]);

  return (
    <div className="w-full flex flex-col items-center mb-8">
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
      <h1
        className="text-2xl md:text-4xl font-other transform -rotate-3 mt-8"
        style={{ color: titleColor }}
      >
        {title}
      </h1>
    </div>
  );
};
