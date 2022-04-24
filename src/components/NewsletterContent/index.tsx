import React from 'react';

import { PageNewsletterFragment, ReglageFragment } from '~/generated/sdk';

import { Content } from '../Content';
import { SectionTitle } from '../SectionTitle';

export const NewsletterContent = ({
  reglage,
  pageNewsletter,
}: {
  reglage: ReglageFragment;
  pageNewsletter: PageNewsletterFragment;
}) => {
  return (
    <div className="flex flex-col mt-4">
      <SectionTitle text={pageNewsletter.titreAbonnement} color={reglage.couleur1.hex} />
      <div className="flex flex-col mb-8">
        <Content data={pageNewsletter.texteAbonnement} />
        <div className="mt-4">
          <Content data={pageNewsletter.texteDonnees} />
        </div>
      </div>
      <SectionTitle text={pageNewsletter.titreArchives} color={reglage.couleur1.hex} />
      <div className="flex flex-col">
        <Content data={pageNewsletter.listeDeLienDesAnciennesNl} />
      </div>
    </div>
  );
};
