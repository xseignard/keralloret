import React from 'react';

import { PageAccueilFragment, ReglageFragment } from '~/generated/sdk';

import { BlobWrapper } from '../BlobWrapper';
import { Content } from '../Content';
import { GalleryImage } from '../GalleryImage';
import { SectionLink } from '../SectionLink';
import { SectionTitle } from '../SectionTitle';

export const HomeDecouvrir = ({
  reglage,
  pageAccueil,
}: {
  reglage: ReglageFragment;
  pageAccueil: PageAccueilFragment;
}) => {
  return (
    <div className="flex flex-col">
      <SectionTitle text="Découvrir" color={reglage.couleur1.hex} />
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-2/3">
          <BlobWrapper>
            <GalleryImage
              src={pageAccueil.imageDecouvrir.responsiveImage.src}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              alt={pageAccueil.imageDecouvrir.responsiveImage.alt}
            />
          </BlobWrapper>
        </div>
        <div className="mb-8 md:mb-0 md:ml-4">
          <Content data={pageAccueil.introDecouvrir} />
        </div>
      </div>
      <SectionLink href="/decouvrir" text="Découvrir +" color={reglage.couleur1.hex} />
    </div>
  );
};
