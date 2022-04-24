import React from 'react';
import Image from 'next/image';

import { PageDecouvrirFragment, ReglageFragment } from '~/generated/sdk';

import { Content } from '../Content';
import { SectionTitle } from '../SectionTitle';

export const DecouvrirPlan = ({
  reglage,
  pageDecouvrir,
}: {
  reglage: ReglageFragment;
  pageDecouvrir: PageDecouvrirFragment;
}) => {
  return (
    <div className="flex flex-col">
      <SectionTitle text={pageDecouvrir.titrePlan} color={reglage.couleur1.hex} />
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="flex-1 mb-4 md:mb-0 md:mr-4">
          <Image
            src={pageDecouvrir.imagePlan.responsiveImage.src}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            alt={pageDecouvrir.imagePlan.responsiveImage.alt}
          />
        </div>
        <div className="flex-1">
          <Content data={pageDecouvrir.textePlan} />
        </div>
      </div>
    </div>
  );
};
