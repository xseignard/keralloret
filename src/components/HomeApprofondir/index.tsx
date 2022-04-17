import React from 'react';
import Link from 'next/link';

import { PageAccueilFragment, ReglageFragment } from '~/generated/sdk';

import { BlobWrapper } from '../BlobWrapper';
import { Citation } from '../Citation';
import { Content } from '../Content';

export const HomeApprofondir = ({
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
        Approfondir
      </h2>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-2/3 flex flex-col">
          <Citation
            citation={pageAccueil.citation1}
            auteur={pageAccueil.citation1Auteur}
            color={reglage.couleur1.hex}
          />
        </div>
        <BlobWrapper growth={0.95}>
          <div className="bg-white px-8 md:px-32 py-20 md:py-32">
            <Content data={pageAccueil.introApprofondir} />
          </div>
        </BlobWrapper>
      </div>
      <Link href="/decouvrir">
        <a className="md:self-end">
          <h2
            className="text-xl md:text-2xl font-work-sans transform -rotate-3 mb-8 md:mb-16 underline underline-offset-4"
            style={{ color: reglage.couleur1.hex }}
          >
            Approfondir +
          </h2>
        </a>
      </Link>
    </div>
  );
};
