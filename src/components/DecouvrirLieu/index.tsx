import React from 'react';
import Image from 'next/image';

import ReactPlayer from 'react-player';

import { PageDecouvrirFragment, ReglageFragment } from '~/generated/sdk';

import { BlobWrapper } from '../BlobWrapper';
import { Content } from '../Content';
import { DecouvrirMap } from '../DecouvrirMap';
import { SectionTitle } from '../SectionTitle';

export const DecouvrirLieu = ({
  reglage,
  pageDecouvrir,
}: {
  reglage: ReglageFragment;
  pageDecouvrir: PageDecouvrirFragment;
}) => {
  return (
    <div className="flex flex-col">
      <SectionTitle text={pageDecouvrir.titreLieu} color={reglage.couleur1.hex} />
      <div className="flex flex-col md:flex-row md:items-start mb-8">
        <div className="flex-1 mb-4 md:mb-0 md:mr-8">
          <DecouvrirMap pageDecouvrir={pageDecouvrir} reglage={reglage} />
        </div>
        <div className="flex-1">
          <Content data={pageDecouvrir.texteLieuOu} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-start mb-8">
        <div className="flex-1 mb-4 md:mb-0 md:mr-8">
          <Content data={pageDecouvrir.texteLieuEsprit} />
        </div>
        <div className="flex-1">
          <BlobWrapper>
            <Image
              src={pageDecouvrir.imageLieu.responsiveImage.src}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              alt={pageDecouvrir.imageLieu.responsiveImage.alt}
            />
          </BlobWrapper>
        </div>
      </div>
      {pageDecouvrir.videoLieu && (
        <div className="relative mb-8" style={{ paddingTop: '56.25%' }}>
          <ReactPlayer
            url={pageDecouvrir.videoLieu.url}
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
