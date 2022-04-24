import React from 'react';

import { InvestirFragment, ReglageFragment } from '~/generated/sdk';

import { Citation } from '../Citation';
import { Content } from '../Content';
import { SectionTitle } from '../SectionTitle';

export const InvestirContent = ({
  reglage,
  investir,
}: {
  reglage: ReglageFragment;
  investir: InvestirFragment;
}) => {
  return (
    <div className="flex flex-col md:items-center">
      <div className="mt-8 md:mt-16 mb-8 md:mb-16 md:w-2/3">
        <Citation
          auteur={investir.auteurCitation}
          citation={investir.citation}
          color={reglage.couleur1.hex}
        />
      </div>
      <Content data={investir.texteInvestir} />
    </div>
  );
};
