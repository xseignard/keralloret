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
import {
  ArticleRecord,
  CagnotteRecord,
  InvestirRecord,
  PageAccueilRecord,
  ReglageRecord,
} from '~/generated/sdk';
import { getApi } from '~/utils/api';

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

      <section className="w-screen px-5 md:max-w-screen-xl mb-6">
        <Nav reglage={reglage} />
        <Hero reglage={reglage} pageAccueil={pageAccueil} />
      </section>
      <section
        className="w-screen flex justify-center"
        style={{ backgroundColor: reglage.couleur2.hex }}
      >
        <HomeArticles reglage={reglage} articles={allArticles} />
      </section>
      <section className="w-screen flex justify-center">
        <HomeDecouvrir reglage={reglage} pageAccueil={pageAccueil} />
      </section>
      <section
        className="w-screen flex justify-center"
        style={{ backgroundColor: reglage.couleur2.hex }}
      >
        <HomeApprofondir reglage={reglage} pageAccueil={pageAccueil} />
      </section>
      <section className="w-screen flex justify-center">
        <HomeInvestir reglage={reglage} investir={investir} />
      </section>
      <section className="w-screen flex justify-center">
        <HomeCagnotte reglage={reglage} cagnotte={cagnotte} />
      </section>
      <section
        className="w-screen flex justify-center"
        style={{ backgroundColor: reglage.couleur1.hex }}
      >
        <Footer reglage={reglage} />
      </section>
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
