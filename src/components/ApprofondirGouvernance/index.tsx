import React from 'react';

import { PageApprofondirFragment, ReglageFragment } from '~/generated/sdk';

import { ApprofondirDocs } from '../ApprofondirDocs';
import { Citation } from '../Citation';
import { Content } from '../Content';
import { SectionTitle } from '../SectionTitle';

export const ApprofondirGouvernance = ({
  reglage,
  pageApprofondir,
}: {
  reglage: ReglageFragment;
  pageApprofondir: PageApprofondirFragment;
}) => {
  const docs = [
    {
      url: pageApprofondir.documentGouvernance1?.url,
      title: pageApprofondir.titreDocumentGouvernance1,
    },
    {
      url: pageApprofondir.documentGouvernance2?.url,
      title: pageApprofondir.titreDocumentGouvernance2,
    },
    {
      url: pageApprofondir.documentGouvernance3?.url,
      title: pageApprofondir.titreDocumentGouvernance3,
    },
  ];
  return (
    <div className="flex flex-col">
      <SectionTitle text={pageApprofondir.titreGouvernance} color={reglage.couleur1.hex} />
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-2/3 mt-8 md:mt-0 mb-8 md:mb-0">
          <Citation
            auteur={pageApprofondir.auteurCitationGouvernance}
            citation={pageApprofondir.citationGouvernance}
            color={reglage.couleur1.hex}
          />
        </div>
        <div className="md:ml-8">
          <Content data={pageApprofondir.texteGouvernance} />
          <div className="mt-8">
            <ApprofondirDocs docs={docs} />
          </div>
        </div>
      </div>
    </div>
  );
};
