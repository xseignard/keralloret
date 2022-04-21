import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Footer } from '~/components/Footer';
import { HomeCagnotte } from '~/components/HomeCagnotte';
import { InvestirContent } from '~/components/InvestirContent';
import { Nav } from '~/components/Nav';
import { SectionWrapper } from '~/components/SectionWrapper';
import { CagnotteRecord, InvestirRecord, ReglageRecord } from '~/generated/sdk';
import { getApi } from '~/utils/api';

const debug = false;

const Investir: NextPage<{
  investir: InvestirRecord;
  reglage: ReglageRecord;
  cagnotte: CagnotteRecord;
}> = ({ investir, reglage, cagnotte }) => {
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
        <InvestirContent reglage={reglage} investir={investir} />
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
  const [investir, reglage, cagnotte] = await Promise.all([
    api.getInvestir(),
    api.getReglage(),
    api.getCagnotte(),
  ]);
  return {
    props: { ...investir, ...reglage, ...cagnotte },
  };
}

export default Investir;
