import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { ArticleImage } from '~/components/ArticleImage';
import { Content } from '~/components/Content';
import { Footer } from '~/components/Footer';
import { Hero } from '~/components/Hero';
import { Nav } from '~/components/Nav';
import { SectionWrapper } from '~/components/SectionWrapper';
import { ArticleRecord, ReglageRecord } from '~/generated/sdk';
import { getApi } from '~/utils/api';

const debug = false;

const Home: NextPage<{
  reglage: ReglageRecord;
  article: ArticleRecord;
}> = ({ reglage, article }) => {
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
        <Hero image={article.image} title={article.titre} titleColor={reglage.couleur1.hex} />
      </SectionWrapper>
      <SectionWrapper>
        <Content
          data={article.texte}
          className="prose md:max-w-screen-xl prose-xl md:prose-2xl font-prose mb-8"
        />
      </SectionWrapper>
      <SectionWrapper>
        <div className="flex flex-col md:flex-row flex-wrap gap-8">
          {article.galerie.map((image, index) => {
            return (
              <div key={index} className="flex-1">
                <ArticleImage image={image.responsiveImage} />
              </div>
            );
          })}
        </div>
      </SectionWrapper>
      <SectionWrapper backgroundColor={reglage.couleur1.hex} debug={debug}>
        <Footer reglage={reglage} />
      </SectionWrapper>
    </div>
  );
};

export async function getStaticPaths() {
  const api = getApi();
  const { allArticles } = await api.getAllArticles();
  return {
    paths: allArticles.map((article) => {
      return {
        params: { id: article.id },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const api = getApi();
  const [reglage, article] = await Promise.all([
    api.getReglage(),
    api.getArticle({ id: params.id }),
  ]);
  return {
    props: { ...reglage, ...article },
  };
}

export default Home;
