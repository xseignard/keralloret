import React from 'react';

import { PageApprofondirFragment, ReglageFragment } from '~/generated/sdk';

import { BlobWrapper } from '../BlobWrapper';
import { Content } from '../Content';
import { GalleryImage } from '../GalleryImage';
import { SectionTitle } from '../SectionTitle';

export const ApprofondirCollaboration = ({
  reglage,
  pageApprofondir,
}: {
  reglage: ReglageFragment;
  pageApprofondir: PageApprofondirFragment;
}) => {
  return (
    <div className="flex flex-col">
      <SectionTitle text={pageApprofondir.titreCollaboration} color={reglage.couleur1.hex} />
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="md:w-2/3 mb-8 md:mb-0">
          {pageApprofondir.imagesCollaboration.map((image, i) => {
            return (
              <BlobWrapper key={i}>
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
        <div className="md:ml-8">
          <Content data={pageApprofondir.texteCollaboration} />
        </div>
      </div>
    </div>
  );
};
