import React from 'react';
import Link from 'next/link';

import { InvestirFragment, ReglageFragment } from '~/generated/sdk';

import { Citation } from '../Citation';
import { Content } from '../Content';

export const HomeInvestir = ({
  reglage,
  investir,
}: {
  reglage: ReglageFragment;
  investir: InvestirFragment;
}) => {
  return (
    <div className="w-full px-5 md:max-w-screen-xl flex flex-col">
      <h2
        className="text-xl md:text-2xl font-work-sans transform -rotate-3 mb-8 md:mb-16 mt-8 md:mt-0"
        style={{ color: reglage.couleur1.hex }}
      >
        Investir
      </h2>
      <div className="flex flex-col-reverse md:flex-row px-4">
        <Content
          data={investir.texteInvestir}
          className="max-w-none prose md:prose-xl font-noto-sans"
        />
        <div className="flex flex-col mb-16 md:mb-0 md:ml-12">
          <Citation
            citation={investir.citation}
            auteur={investir.auteurCitation}
            color={reglage.couleur1.hex}
          />
        </div>
      </div>
      <Link href="/decouvrir">
        <a className="md:self-end">
          <h2
            className="text-xl md:text-2xl font-work-sans transform -rotate-3 mb-8 md:mb-16 underline underline-offset-4"
            style={{ color: reglage.couleur1.hex }}
          >
            + d'infos
          </h2>
        </a>
      </Link>
    </div>
  );
};
