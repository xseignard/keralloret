import React from 'react';

import { PageDecouvrirFragment, ReglageFragment } from '~/generated/sdk';

import { DecouvrirPortrait } from '../DecouvrirPortrait';
import { SectionTitle } from '../SectionTitle';

export const DecouvrirPortraits = ({
  reglage,
  pageDecouvrir,
}: {
  reglage: ReglageFragment;
  pageDecouvrir: PageDecouvrirFragment;
}) => {
  return (
    <div className="flex flex-col">
      <SectionTitle text={pageDecouvrir.titrePortraits} color={reglage.couleur1.hex} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pageDecouvrir.portraits.map((portrait, index) => {
          return <DecouvrirPortrait key={index} portrait={portrait} />;
        })}
      </div>
    </div>
  );
};
