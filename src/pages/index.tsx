import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Actus } from '~/components/Actus';
import { Hero } from '~/components/Hero';
import { Nav } from '~/components/Nav';
import { ArticleRecord, PageAccueilRecord, ReglageRecord } from '~/generated/sdk';
import { getApi } from '~/utils/api';

const Home: NextPage<{
  pageAccueil: PageAccueilRecord;
  reglage: ReglageRecord;
  allArticles: ArticleRecord[];
}> = ({ pageAccueil, reglage, allArticles }) => {
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
        <Actus reglage={reglage} articles={allArticles} />
      </section>
    </div>
  );
};

export async function getServerSideProps() {
  const api = getApi();
  const [pageAccueil, reglage, articles] = await Promise.all([
    api.getPageAccueil(),
    api.getReglage(),
    api.getAllArticles(),
  ]);
  return {
    props: { ...pageAccueil, ...reglage, ...articles },
  };
}

export default Home;
