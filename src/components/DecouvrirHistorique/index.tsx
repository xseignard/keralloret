import React from 'react';
import Image from 'next/image';

import { PageDecouvrirFragment, ReglageFragment } from '~/generated/sdk';

import { BlobWrapper } from '../BlobWrapper';
import { Citation } from '../Citation';
import { Content } from '../Content';
import { SectionTitle } from '../SectionTitle';

export const DecouvrirHistorique = ({
  reglage,
  pageDecouvrir,
}: {
  reglage: ReglageFragment;
  pageDecouvrir: PageDecouvrirFragment;
}) => {
  return (
    <div className="flex flex-col">
      <SectionTitle text={pageDecouvrir.titreHistorique} color={reglage.couleur1.hex} />
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="mb-8 md:mb-0">
          <Content data={pageDecouvrir.texteHistorique} />
        </div>
        <div className="md:w-2/3 md:ml-8">
          <Citation
            auteur={pageDecouvrir.auteurCitationHistorique}
            citation={pageDecouvrir.citationHistorique}
            color={reglage.couleur1.hex}
          />
          <div className="mt-8">
            <BlobWrapper>
              <Image
                src={pageDecouvrir.imageHistorique.responsiveImage.src}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                alt={pageDecouvrir.imageHistorique.responsiveImage.alt}
              />
            </BlobWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};
