import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { ArticleItem } from '~/components/ArticleItem';
import { Footer } from '~/components/Footer';
import { Nav } from '~/components/Nav';
import { SectionWrapper } from '~/components/SectionWrapper';
import { ArticleRecord, ReglageRecord } from '~/generated/sdk';
import { getApi } from '~/utils/api';

const debug = false;

const Home: NextPage<{
  reglage: ReglageRecord;
  allArticles: ArticleRecord[];
}> = ({ reglage, allArticles }) => {
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
      <SectionWrapper backgroundColor={reglage.couleur2.hex} debug={debug}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {allArticles.map((article, index) => {
            return <ArticleItem key={index} article={article} />;
          })}
        </div>
      </SectionWrapper>
      <SectionWrapper backgroundColor={reglage.couleur1.hex} debug={debug}>
        <Footer reglage={reglage} />
      </SectionWrapper>
    </div>
  );
};

export async function getServerSideProps() {
  const api = getApi();
  const [reglage, articles] = await Promise.all([api.getReglage(), api.getAllArticles()]);
  return {
    props: { ...reglage, ...articles },
  };
}

export default Home;
