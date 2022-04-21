import React from 'react';
import Image from 'next/image';

import { PageApprofondirFragment, ReglageFragment } from '~/generated/sdk';

import { Citation } from '../Citation';
import { Content } from '../Content';
import { SectionTitle } from '../SectionTitle';

export const ApprofondirCombien = ({
  reglage,
  pageApprofondir,
}: {
  reglage: ReglageFragment;
  pageApprofondir: PageApprofondirFragment;
}) => {
  return (
    <div className="flex flex-col">
      <SectionTitle text={pageApprofondir.titreCombien} color={reglage.couleur1.hex} />
      <div className="flex flex-col-reverse md:flex-row md:items-start">
        <div className="md:mr-4">
          <Content data={pageApprofondir.texteCombien} />
        </div>
        <div className="md:w-2/3 mb-8 md:mb-0">
          <Image
            src={pageApprofondir.imageCombien.responsiveImage.src}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            alt={pageApprofondir.imageCombien.responsiveImage.alt}
          />
          <div className="mt-8">
            <Citation
              auteur={pageApprofondir.auteurCitationCombien}
              citation={pageApprofondir.citationCombien}
              color={reglage.couleur1.hex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
