import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { ApprofondirCollaboration } from '~/components/ApprofondirCollaboration';
import { ApprofondirCombien } from '~/components/ApprofondirCombien';
import { ApprofondirCopains } from '~/components/ApprofondirCopains';
import { ApprofondirGouvernance } from '~/components/ApprofondirGouvernance';
import { ApprofondirMontage } from '~/components/ApprofondirMontage';
import { Footer } from '~/components/Footer';
import { HomeCagnotte } from '~/components/HomeCagnotte';
import { Nav } from '~/components/Nav';
import { SectionTitle } from '~/components/SectionTitle';
import { SectionWrapper } from '~/components/SectionWrapper';
import { CagnotteRecord, PageApprofondirRecord, ReglageRecord } from '~/generated/sdk';
import { getApi } from '~/utils/api';

const debug = false;

const Approfondir: NextPage<{
  pageApprofondir: PageApprofondirRecord;
  reglage: ReglageRecord;
  cagnotte: CagnotteRecord;
}> = ({ pageApprofondir, reglage, cagnotte }) => {
  return (
    <div className="flex flex-col items-center min-h-screen relative bg-background overflow-x-hidden">
      <Head>
        <title>Keralloret</title>
        <meta name="description" content="Keralloret" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SectionWrapper debug={debug}>
        <Nav reglage={reglage} />
      </SectionWrapper>
      <SectionWrapper debug={debug}>
        <ApprofondirGouvernance reglage={reglage} pageApprofondir={pageApprofondir} />
      </SectionWrapper>
      <SectionWrapper backgroundColor={reglage.couleur2.hex} debug={debug}>
        <ApprofondirMontage reglage={reglage} pageApprofondir={pageApprofondir} />
      </SectionWrapper>
      <SectionWrapper debug={debug}>
        <ApprofondirCombien reglage={reglage} pageApprofondir={pageApprofondir} />
      </SectionWrapper>
      <SectionWrapper debug={debug}>
        <ApprofondirCollaboration reglage={reglage} pageApprofondir={pageApprofondir} />
      </SectionWrapper>
      <SectionWrapper debug={debug}>
        <ApprofondirCopains reglage={reglage} pageApprofondir={pageApprofondir} />
      </SectionWrapper>
      <SectionWrapper backgroundColor={reglage.couleur2.hex} debug={debug}>
        <HomeCagnotte reglage={reglage} cagnotte={cagnotte} />
      </SectionWrapper>
      <SectionWrapper backgroundColor={reglage.couleur1.hex} debug={debug}>
        <Footer reglage={reglage} />
      </SectionWrapper>
    </div>
  );
};

export async function getServerSideProps() {
  const api = getApi();
  const [pageApprofondir, reglage, cagnotte] = await Promise.all([
    api.getPageApprofondir(),
    api.getReglage(),
    api.getCagnotte(),
  ]);
  return {
    props: { ...pageApprofondir, ...reglage, ...cagnotte },
  };
}

export default Approfondir;
