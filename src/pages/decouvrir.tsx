import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { DecouvrirGalerie } from '~/components/DecouvrirGalerie';
import { DecouvrirHistorique } from '~/components/DecouvrirHistorique';
import { DecouvrirIntro } from '~/components/DecouvrirIntro';
import { DecouvrirLieu } from '~/components/DecouvrirLieu';
import { DecouvrirPlan } from '~/components/DecouvrirPlan';
import { DecouvrirPortraits } from '~/components/DecouvrirPortraits';
import { Footer } from '~/components/Footer';
import { HomeCagnotte } from '~/components/HomeCagnotte';
import { Nav } from '~/components/Nav';
import { SectionTitle } from '~/components/SectionTitle';
import { SectionWrapper } from '~/components/SectionWrapper';
import { CagnotteRecord, PageDecouvrirRecord, ReglageRecord } from '~/generated/sdk';
import { getApi } from '~/utils/api';

const debug = true;

const Decouvrir: NextPage<{
  pageDecouvrir: PageDecouvrirRecord;
  reglage: ReglageRecord;
  cagnotte: CagnotteRecord;
}> = ({ pageDecouvrir, reglage, cagnotte }) => {
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
        <SectionTitle text="Découvrir" color={reglage.couleur1.hex} />
      </SectionWrapper>
      <SectionWrapper debug={debug}>
        <DecouvrirIntro reglage={reglage} pageDecouvrir={pageDecouvrir} />
      </SectionWrapper>
      <SectionWrapper backgroundColor={reglage.couleur2.hex} debug={debug}>
        <DecouvrirPortraits reglage={reglage} pageDecouvrir={pageDecouvrir} />
      </SectionWrapper>
      <SectionWrapper debug={debug}>
        <DecouvrirLieu reglage={reglage} pageDecouvrir={pageDecouvrir} />
      </SectionWrapper>
      <SectionWrapper debug={debug}>
        <DecouvrirPlan reglage={reglage} pageDecouvrir={pageDecouvrir} />
      </SectionWrapper>
      <SectionWrapper debug={debug}>
        <DecouvrirGalerie reglage={reglage} pageDecouvrir={pageDecouvrir} />
      </SectionWrapper>
      <SectionWrapper debug={debug}>
        <DecouvrirHistorique reglage={reglage} pageDecouvrir={pageDecouvrir} />
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
  const [pageDecouvrir, reglage, cagnotte] = await Promise.all([
    api.getPageDecouvrir(),
    api.getReglage(),
    api.getCagnotte(),
  ]);
  return {
    props: { ...pageDecouvrir, ...reglage, ...cagnotte },
  };
}

export default Decouvrir;
