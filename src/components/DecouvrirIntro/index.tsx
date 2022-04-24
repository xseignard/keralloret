import React from 'react';

import { PageDecouvrirFragment, ReglageFragment } from '~/generated/sdk';

import { Citation } from '../Citation';
import { Content } from '../Content';
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
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-2/3 mt-8 md:mt-0 mb-8 md:mb-0">
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
    </div>
  );
};
