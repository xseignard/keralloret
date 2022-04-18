import React from 'react';

import { InvestirFragment, ReglageFragment } from '~/generated/sdk';

import { Citation } from '../Citation';
import { Content } from '../Content';
import { SectionLink } from '../SectionLink';
import { SectionTitle } from '../SectionTitle';

export const HomeInvestir = ({
  reglage,
  investir,
}: {
  reglage: ReglageFragment;
  investir: InvestirFragment;
}) => {
  return (
    <div className="flex flex-col">
      <SectionTitle text="Investir" color={reglage.couleur1.hex} />
      <div className="flex flex-col-reverse md:flex-row">
        <Content
          data={investir.texteInvestir}
          className="max-w-none prose md:prose-xl font-prose"
        />
        <div className="flex flex-col mb-16 md:mb-0 md:ml-12">
          <Citation
            citation={investir.citation}
            auteur={investir.auteurCitation}
            color={reglage.couleur1.hex}
          />
        </div>
      </div>
      <SectionLink href="/decouvrir" text="+ d'infos" color={reglage.couleur1.hex} />
    </div>
  );
};
