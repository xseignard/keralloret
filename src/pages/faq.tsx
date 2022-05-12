import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Content } from '~/components/Content';
import { Footer } from '~/components/Footer';
import { HomeCagnotte } from '~/components/HomeCagnotte';
import { Nav } from '~/components/Nav';
import { SectionTitle } from '~/components/SectionTitle';
import { SectionWrapper } from '~/components/SectionWrapper';
import {
  CagnotteRecord,
  FaqRecord,
  LexiqueRecord,
  PageFaqLexiqueRecord,
  ReglageRecord,
} from '~/generated/sdk';
import { getApi } from '~/utils/api';

const debug = false;

const Items = ({
  title,
  items,
  titleColor,
}: {
  title: string;
  items: FaqRecord[] | LexiqueRecord[];
  titleColor: string;
}) => {
  return (
    <div className="w-full md:max-w-screen-xl flex flex-col">
      <SectionTitle text={title} color={titleColor} />
      <div className="grid grid-cols-1 gap-8">
        {items.map((item, index) => {
          return (
            <div key={index}>
              <p className="prose-xl md:prose-2xl font-prose font-bold mb-4">
                {'question' in item ? item.question : item.notion}
              </p>
              <Content
                className="prose md:max-w-screen-xl md:prose-xl font-prose prose-p:my-2 prose-strong:text-inherit"
                data={'reponse' in item ? item.reponse : item.definition}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Faq: NextPage<{
  pageFaqLexique: PageFaqLexiqueRecord;
  reglage: ReglageRecord;
  cagnotte: CagnotteRecord;
}> = ({ pageFaqLexique, reglage, cagnotte }) => {
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
      <SectionWrapper>
        <Items
          title={pageFaqLexique.titreFaq}
          titleColor={reglage.couleur1.hex}
          items={pageFaqLexique.listeFaq}
        />
      </SectionWrapper>
      <SectionWrapper>
        <Items
          title={pageFaqLexique.titreLexique}
          titleColor={reglage.couleur1.hex}
          items={pageFaqLexique.listeLexique}
        />
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
  const [pageFaqLexique, reglage, cagnotte] = await Promise.all([
    api.getPageFaqLexique(),
    api.getReglage(),
    api.getCagnotte(),
  ]);
  return {
    props: { ...pageFaqLexique, ...reglage, ...cagnotte },
  };
}

export default Faq;
