import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import format from 'date-fns/format';
import frLocale from 'date-fns/locale/fr';
import parseISO from 'date-fns/parseISO';
import { motion } from 'framer-motion';

import { ArticleImage } from '~/components/ArticleImage';
import { Content } from '~/components/Content';
import { Footer } from '~/components/Footer';
import { HomeCagnotte } from '~/components/HomeCagnotte';
import { Nav } from '~/components/Nav';
import { SectionWrapper } from '~/components/SectionWrapper';
import { ArticleRecord, CagnotteRecord, ReglageRecord } from '~/generated/sdk';
import { getApi } from '~/utils/api';

const debug = false;

const ArticleLink = ({ article, text }: { article: ArticleRecord; text: string }) => {
  return (
    <Link href={`/actu/${article.id}`} passHref>
      <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
        <div className="flex flex-col items-center justify-between w-full md:w-80 h-full">
          <h3 className="font-other">{text}</h3>
          <ArticleImage image={article.image} />
          <h3 className="font-other">{article.titre}</h3>
        </div>
      </motion.a>
    </Link>
  );
};

const ArticlePage: NextPage<{
  reglage: ReglageRecord;
  allArticles: ArticleRecord[];
  cagnotte: CagnotteRecord;
}> = ({ reglage, allArticles, cagnotte }) => {
  const { query } = useRouter();
  const articleIndex = allArticles.findIndex((a) => a.id === query.id);
  const article = allArticles[articleIndex];
  const prevArticle = allArticles[articleIndex + 1];
  const nextArticle = allArticles[articleIndex - 1];
  if (!article) return null;
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
      <SectionWrapper width="article" debug={debug}>
        <ArticleImage image={article.image} />
      </SectionWrapper>
      <SectionWrapper width="article" debug={debug}>
        <div className="flex flex-col">
          <h1 className="text-xl md:text-xl font-other font-bold mb-2">{article.titre}</h1>
          <span className="prose prose-sm mb-4 font-prose self-start">
            {format(parseISO(article.date), 'dd MMMM yyyy', { locale: frLocale })}
          </span>
          <Content data={article.texte} className="prose font-prose mb-8" />
        </div>
      </SectionWrapper>
      <SectionWrapper width="article" debug={debug}>
        <div className="flex flex-col gap-4 md:gap-8">
          {article.galerie.map((image, index) => {
            return <ArticleImage key={index} image={image} />;
          })}
        </div>
      </SectionWrapper>
      <SectionWrapper debug={debug}>
        <div className="flex flex-col md:flex-row md:justify-around gap-4">
          {prevArticle ? <ArticleLink article={prevArticle} text="Actu précédente" /> : <div />}
          {nextArticle ? <ArticleLink article={nextArticle} text="Actu suivante" /> : <div />}
        </div>
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
  const [reglage, articles, cagnotte] = await Promise.all([
    api.getReglage(),
    api.getAllArticles(),
    api.getCagnotte(),
  ]);
  return {
    props: { ...reglage, ...articles, ...cagnotte },
  };
}

export default ArticlePage;
