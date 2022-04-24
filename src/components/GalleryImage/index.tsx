import React from 'react';
import Image, { ImageProps } from 'next/image';
import { useRouter } from 'next/router';

// @ts-expect-error - cannot find type defs
import { LightgalleryItem } from 'react-lightgallery';

import { useIsMobile } from '~/hooks/useIsMobile';

export const GalleryImage = (props: ImageProps) => {
  const router = useRouter();
  const isMoble = useIsMobile();
  // eslint-disable-next-line jsx-a11y/alt-text
  if (isMoble) return <Image {...props} />;
  return (
    <div className="cursor-pointer">
      <LightgalleryItem src={props.src} group={router.asPath}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image {...props} />
      </LightgalleryItem>
    </div>
  );
};
