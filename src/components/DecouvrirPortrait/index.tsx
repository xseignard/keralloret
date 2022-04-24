import React from 'react';
import Image from 'next/image';

import { PageDecouvrirFragment } from '~/generated/sdk';
import { useIsMobile } from '~/hooks/useIsMobile';

import { BlobWrapper } from '../BlobWrapper';
import { Content } from '../Content';

export const DecouvrirPortrait = ({
  portrait,
}: {
  portrait: PageDecouvrirFragment['portraits'][number];
}) => {
  const isMobile = useIsMobile();
  return (
    <div className="flex-1 -mb-16">
      <div className="relative z-10">
        <BlobWrapper>
          <Image
            src={portrait.imagePortrait.responsiveImage.src}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
            alt={portrait.imagePortrait.responsiveImage.alt}
          />
        </BlobWrapper>
      </div>
      <div className="relative -top-16">
        <BlobWrapper growth={0.99} pointCount={isMobile ? 130 : 80}>
          <div className="flex flex-col bg-white px-10 py-16">
            <h2 className="prose prose-2xl font-other mb-1">{portrait.nom}</h2>
            <span className="prose prose-sm mb-4 font-prose">{portrait.statutHabitantAutre}</span>
            <Content data={portrait.textePortrait} />
          </div>
        </BlobWrapper>
      </div>
    </div>
  );
};
