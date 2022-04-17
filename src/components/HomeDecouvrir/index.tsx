import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { PageAccueilFragment, ReglageFragment } from '~/generated/sdk';

import { BlobWrapper } from '../BlobWrapper';
import { Content } from '../Content';

export const HomeDecouvrir = ({
  reglage,
  pageAccueil,
}: {
  reglage: ReglageFragment;
  pageAccueil: PageAccueilFragment;
}) => {
  return (
    <div className="w-full px-5 md:max-w-screen-xl flex flex-col">
      <h2
        className="text-xl md:text-2xl font-work-sans transform -rotate-3 mb-8 md:mb-16 mt-8 md:mt-0"
        style={{ color: reglage.couleur1.hex }}
      >
        Découvrir
      </h2>
      <div className="flex flex-col md:flex-row px-4 md:items-center">
        <div className="md:w-2/3">
          <BlobWrapper>
            <Image
              src={pageAccueil.imageDecouvrir.responsiveImage.src}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              alt={pageAccueil.imageDecouvrir.responsiveImage.alt}
            />
          </BlobWrapper>
        </div>
        <div className="mb-8 md:ml-4">
          <Content data={pageAccueil.introDecouvrir} />
        </div>
      </div>
      <Link href="/decouvrir">
        <a className="md:self-end">
          <h2
            className="text-xl md:text-2xl font-work-sans transform -rotate-3 mb-8 md:mb-16 underline underline-offset-4"
            style={{ color: reglage.couleur1.hex }}
          >
            Découvrir +
          </h2>
        </a>
      </Link>
    </div>
  );
};
