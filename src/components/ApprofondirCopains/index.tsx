import React from 'react';
import Image from 'next/image';

import { PageApprofondirFragment, ReglageFragment } from '~/generated/sdk';

import { BlobWrapper } from '../BlobWrapper';
import { Content } from '../Content';
import { SectionTitle } from '../SectionTitle';

export const ApprofondirCopains = ({
  reglage,
  pageApprofondir,
}: {
  reglage: ReglageFragment;
  pageApprofondir: PageApprofondirFragment;
}) => {
  return (
    <div className="flex flex-col">
      <SectionTitle text={pageApprofondir.titreCopains} color={reglage.couleur1.hex} />
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="mb-8 md:mb-0 md:mr-4">
          <Content data={pageApprofondir.texteCopains} />
        </div>
        <div className="md:w-2/3">
          <BlobWrapper>
            <Image
              src={pageApprofondir.imageCopains.responsiveImage.src}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              alt={pageApprofondir.imageCopains.responsiveImage.alt}
            />
          </BlobWrapper>
        </div>
      </div>
    </div>
  );
};
