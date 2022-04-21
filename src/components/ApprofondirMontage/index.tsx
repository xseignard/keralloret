import React from 'react';

import { PageApprofondirFragment, ReglageFragment } from '~/generated/sdk';
import { useIsMobile } from '~/hooks/useIsMobile';

import { ApprofondirDocs } from '../ApprofondirDocs';
import { BlobWrapper } from '../BlobWrapper';
import { Content } from '../Content';
import { SectionTitle } from '../SectionTitle';

export const ApprofondirMontage = ({
  reglage,
  pageApprofondir,
}: {
  reglage: ReglageFragment;
  pageApprofondir: PageApprofondirFragment;
}) => {
  const isMobile = useIsMobile();
  const docs = [
    { url: pageApprofondir.documentMontage1?.url, title: pageApprofondir.titreDocumentMontage1 },
    { url: pageApprofondir.documentMontage2?.url, title: pageApprofondir.titreDocumentMontage2 },
    { url: pageApprofondir.documentMontage3?.url, title: pageApprofondir.titreDocumentMontage3 },
    { url: pageApprofondir.documentMontage4?.url, title: pageApprofondir.titreDocumentMontage4 },
  ];
  return (
    <div className="w-full md:max-w-screen-xl flex flex-col">
      <SectionTitle text={pageApprofondir.titreMontage} color={reglage.couleur1.hex} />
      <div className="flex flex-col-reverse md:flex-row md:items-end">
        <div className="md:w-2/3 flex flex-col mt-8 md:mt-0">
          <ApprofondirDocs docs={docs} />
        </div>
        <BlobWrapper growth={0.99} pointCount={isMobile ? 200 : 80}>
          <div className="bg-white px-8 py-8 md:py-12">
            <Content data={pageApprofondir.texteMontage} />
          </div>
        </BlobWrapper>
      </div>
    </div>
  );
};
