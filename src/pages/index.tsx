import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Footer } from '~/components/Footer';
import { Hero } from '~/components/Hero';
import { HomeApprofondir } from '~/components/HomeApprofondir';
import { HomeArticles } from '~/components/HomeArticles';
import { HomeCagnotte } from '~/components/HomeCagnotte';
import { HomeDecouvrir } from '~/components/HomeDecouvrir';
import { HomeInvestir } from '~/components/HomeInvestir';
import { Nav } from '~/components/Nav';
import { SectionWrapper } from '~/components/SectionWrapper';
import {
  ArticleRecord,
  CagnotteRecord,
  InvestirRecord,
  PageAccueilRecord,
  ReglageRecord,
} from '~/generated/sdk';
import { getApi } from '~/utils/api';

const debug = false;

const Home: NextPage<{
  pageAccueil: PageAccueilRecord;
  reglage: ReglageRecord;
  allArticles: ArticleRecord[];
  investir: InvestirRecord;
  cagnotte: CagnotteRecord;
}> = ({ pageAccueil, reglage, allArticles, investir, cagnotte }) => {
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
        <Hero reglage={reglage} pageAccueil={pageAccueil} />
      </SectionWrapper>
      <SectionWrapper backgroundColor={reglage.couleur2.hex} debug={debug}>
        <HomeArticles reglage={reglage} articles={allArticles} />
      </SectionWrapper>
      <SectionWrapper debug={debug}>
        <HomeDecouvrir reglage={reglage} pageAccueil={pageAccueil} />
      </SectionWrapper>
      <SectionWrapper backgroundColor={reglage.couleur2.hex} debug={debug}>
        <HomeApprofondir reglage={reglage} pageAccueil={pageAccueil} />
      </SectionWrapper>
      <SectionWrapper debug={debug}>
        <HomeInvestir reglage={reglage} investir={investir} />
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
  const [pageAccueil, reglage, articles, investir, cagnotte] = await Promise.all([
    api.getPageAccueil(),
    api.getReglage(),
    api.getAllArticles(),
    api.getInvestir(),
    api.getCagnotte(),
  ]);
  return {
    props: { ...pageAccueil, ...reglage, ...articles, ...investir, ...cagnotte },
  };
}

export default Home;
