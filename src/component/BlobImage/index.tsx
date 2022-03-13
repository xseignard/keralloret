import React from 'react';
import Image, { ImageProps } from 'next/image';

import { v4 as uuidv4 } from 'uuid';

import { useBlobPath } from '~/hooks/useBlobPath';

export const BlobImage = ({
  src,
  width,
  height,
  growth = 0.8,
  pointCount = 8,
}: {
  src: ImageProps['src'];
  width: number;
  height: number;
  /** how far from the center the points will be */
  growth?: number;
  /** how many points to create the shape */
  pointCount?: number;
}) => {
  const path = useBlobPath({ width, height, growth, pointCount });
  const id = uuidv4();

  if (!path) return null;
  return (
    <div style={{ width, height }}>
      <svg width="0" height="0">
        <defs>
          <clipPath id={id}>
            <path d={path} />
          </clipPath>
        </defs>
      </svg>
      <div className="relative w-full h-full" style={{ clipPath: `url(#${id})` }}>
        <Image src={src} width={width} height={height} alt="" />
      </div>
    </div>
  );
};
