import React from 'react';

import { InvestirFragment, ReglageFragment } from '~/generated/sdk';

import { Citation } from '../Citation';
import { Content } from '../Content';
import { GalleryImage } from '../GalleryImage';

export const InvestirContent = ({
  reglage,
  investir,
}: {
  reglage: ReglageFragment;
  investir: InvestirFragment;
}) => {
  return (
    <div>
      <div className="md:w-2/3 my-4 md:my-8 mx-auto">
        <Citation
          auteur={investir.auteurCitation}
          citation={investir.citation}
          color={reglage.couleur1.hex}
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row md:items-start">
        <div className="md:mr-8">
          <Content data={investir.texteInvestir} />
        </div>
        <div className="md:w-2/3 mb-8 md:mb-0">
          <GalleryImage
            src={investir.imageUn.responsiveImage.src}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            alt={investir.imageUn.responsiveImage.alt}
          />
          <GalleryImage
            src={investir.imageDeux.responsiveImage.src}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            alt={investir.imageDeux.responsiveImage.alt}
          />
        </div>
      </div>
    </div>
  );
};
