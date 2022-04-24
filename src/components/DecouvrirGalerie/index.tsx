import React from 'react';

import { PageDecouvrirFragment, ReglageFragment } from '~/generated/sdk';

import { BlobWrapper } from '../BlobWrapper';
import { GalleryImage } from '../GalleryImage';
import { SectionTitle } from '../SectionTitle';

export const DecouvrirGalerie = ({
  reglage,
  pageDecouvrir,
}: {
  reglage: ReglageFragment;
  pageDecouvrir: PageDecouvrirFragment;
}) => {
  return (
    <div className="flex flex-col">
      <SectionTitle text={pageDecouvrir.titreGalerie} color={reglage.couleur1.hex} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pageDecouvrir.imagesGalerie.map((image, index) => {
          return (
            <BlobWrapper key={index}>
              <GalleryImage
                src={image.responsiveImage.src}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                alt={image.responsiveImage.alt}
              />
            </BlobWrapper>
          );
        })}
      </div>
    </div>
  );
};
