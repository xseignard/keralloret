import React from 'react';

import { PageAccueilFragment, ReglageFragment } from '~/generated/sdk';

import { BlobWrapper } from '../BlobWrapper';
import { Citation } from '../Citation';
import { Content } from '../Content';
import { SectionLink } from '../SectionLink';
import { SectionTitle } from '../SectionTitle';

export const HomeApprofondir = ({
  reglage,
  pageAccueil,
}: {
  reglage: ReglageFragment;
  pageAccueil: PageAccueilFragment;
}) => {
  return (
    <div className="w-full md:max-w-screen-xl flex flex-col">
      <SectionTitle text="Approfondir" color={reglage.couleur1.hex} />
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
      <SectionLink href="/decouvrir" text="Approfondir +" color={reglage.couleur1.hex} />
    </div>
  );
};
