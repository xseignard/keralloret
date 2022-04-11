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
    <div className="w-full flex flex-col items-center">
      <BlobWrapper
        className="mb-6"
        style={{
          width: pageAccueil.image.responsiveImage.width,
          height: pageAccueil.image.responsiveImage.height,
        }}
      >
        <Image
          src={pageAccueil.image.responsiveImage.src}
          layout="fill"
          quality={100}
          alt={pageAccueil.image.responsiveImage.alt}
        />
      </BlobWrapper>
      <h1
        className="text-2xl md:text-4xl font-work-sans transform -rotate-3 pb-16"
        style={{ color: reglage.couleur1.hex }}
      >
        {pageAccueil.titrePrincipal}
      </h1>
      <Content data={pageAccueil.presentation} />
    </div>
  );
};
