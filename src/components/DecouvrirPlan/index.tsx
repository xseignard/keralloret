import React from 'react';

import { PageDecouvrirFragment, ReglageFragment } from '~/generated/sdk';

import { Content } from '../Content';
import { SectionTitle } from '../SectionTitle';

export const DecouvrirPlan = ({
  reglage,
  pageDecouvrir,
}: {
  reglage: ReglageFragment;
  pageDecouvrir: PageDecouvrirFragment;
}) => {
  return (
    <div className="flex flex-col">
      <SectionTitle text={pageDecouvrir.titrePlan} color={reglage.couleur1.hex} />
      <Content data={pageDecouvrir.textePlan} />
    </div>
  );
};
