import React from 'react';
import Image from 'next/image';

import { PageAccueilFragment, ReglageFragment } from '~/generated/sdk';

import { BlobWrapper } from '../BlobWrapper';
import { Content } from '../Content';

export const Hero = ({
  reglage,
  pageAccueil,
}: {
  reglage: ReglageFragment;
  pageAccueil: PageAccueilFragment;
}) => {
  return (
    <div className="w-full flex flex-col items-center mb-8">
      <div className="w-2/3">
        <BlobWrapper>
          <Image
            src={pageAccueil.image.responsiveImage.src}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
            alt={pageAccueil.image.responsiveImage.alt}
          />
        </BlobWrapper>
      </div>
      <h1
        className="text-2xl md:text-4xl font-other transform -rotate-3 mt-8 mb-16"
        style={{ color: reglage.couleur1.hex }}
      >
        {pageAccueil.titrePrincipal}
      </h1>
      <Content
        data={pageAccueil.presentation}
        className="prose md:max-w-screen-xl prose-xl md:prose-2xl font-prose"
      />
    </div>
  );
};
