import React, { useEffect, useState } from 'react';

import { ImageFragment } from '~/generated/sdk';

import { BlobWrapper } from '../BlobWrapper';
import { GalleryImage } from '../GalleryImage';

const P5 = 20;

export const Hero = ({
  image,
  title,
  titleColor,
  maxWidth = 1280,
  padding = P5,
}: {
  image: ImageFragment;
  title: string;
  titleColor: string;
  maxWidth?: number;
  padding?: number;
}) => {
  const [height, setHeight] = useState<number>();
  const [width, setWidth] = useState<number>();
  useEffect(() => {
    const newWidth = Math.min(window.innerWidth - padding * 2, maxWidth);
    setWidth(newWidth);
    setHeight(Math.round(newWidth / image.responsiveImage.aspectRatio));
  }, [image.responsiveImage, maxWidth, padding]);

  return (
    <div className="w-full flex items-center flex-col mb-8">
      {width && height && (
        <BlobWrapper growth={0.95} pointCount={16} style={{ width, height }}>
          <GalleryImage
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
