import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Footer } from '~/components/Footer';
import { HomeCagnotte } from '~/components/HomeCagnotte';
import { Nav } from '~/components/Nav';
import { SectionTitle } from '~/components/SectionTitle';
import { SectionWrapper } from '~/components/SectionWrapper';
import { CagnotteRecord, ReglageRecord } from '~/generated/sdk';
import { getApi } from '~/utils/api';

const debug = false;

const Approfondir: NextPage<{
  reglage: ReglageRecord;
  cagnotte: CagnotteRecord;
}> = ({ reglage, cagnotte }) => {
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
        <SectionTitle text="Approfondir" color={reglage.couleur1.hex} />
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
  const [reglage, cagnotte] = await Promise.all([api.getReglage(), api.getCagnotte()]);
  return {
    props: { ...reglage, ...cagnotte },
  };
}

export default Approfondir;
