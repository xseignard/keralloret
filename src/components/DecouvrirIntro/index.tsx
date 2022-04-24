import React from 'react';

import ReactPlayer from 'react-player';

import { PageDecouvrirFragment, ReglageFragment } from '~/generated/sdk';

import { BlobWrapper } from '../BlobWrapper';
import { Citation } from '../Citation';
import { Content } from '../Content';
import { GalleryImage } from '../GalleryImage';
import { SectionTitle } from '../SectionTitle';

export const DecouvrirIntro = ({
  reglage,
  pageDecouvrir,
}: {
  reglage: ReglageFragment;
  pageDecouvrir: PageDecouvrirFragment;
}) => {
  return (
    <div className="flex flex-col">
      <SectionTitle text={pageDecouvrir.titreIntro} color={reglage.couleur1.hex} />
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="md:w-2/3 mt-8 md:mt-0 mb-8 md:mb-0">
          <div className="mb-8">
            <BlobWrapper>
              <GalleryImage
                src={pageDecouvrir.imageIntro.responsiveImage.src}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                alt={pageDecouvrir.imageIntro.responsiveImage.alt}
              />
            </BlobWrapper>
          </div>
          <Citation
            auteur={pageDecouvrir.auteurCitationIntro}
            citation={pageDecouvrir.citationIntro}
            color={reglage.couleur1.hex}
          />
        </div>
        <div className="md:ml-8">
          <Content data={pageDecouvrir.texteIntro} />
        </div>
      </div>
      {pageDecouvrir.videoIntro && (
        <div className="relative mt-8" style={{ paddingTop: '56.25%' }}>
          <ReactPlayer
            url={pageDecouvrir.videoIntro.url}
            controls
            width="100%"
            height="100%"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      )}
    </div>
  );
};
