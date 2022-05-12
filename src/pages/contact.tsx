import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Content } from '~/components/Content';
import { Footer } from '~/components/Footer';
import { HomeCagnotte } from '~/components/HomeCagnotte';
import { Nav } from '~/components/Nav';
import { SectionTitle } from '~/components/SectionTitle';
import { SectionWrapper } from '~/components/SectionWrapper';
import { CagnotteRecord, PageMentionsContactRecord, ReglageRecord } from '~/generated/sdk';
import { getApi } from '~/utils/api';

const debug = false;

const MentionsContact: NextPage<{
  pageMentionsContact: PageMentionsContactRecord;
  reglage: ReglageRecord;
  cagnotte: CagnotteRecord;
}> = ({ pageMentionsContact, reglage, cagnotte }) => {
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
        <div
          className="w-full md:max-w-screen-xl flex flex-col md:flex-row mb-4 md:mb-8"
          id="contact"
        >
          <div className="flex flex-col">
            <SectionTitle text={pageMentionsContact.titreContact} color={reglage.couleur1.hex} />
            <Content data={pageMentionsContact.texteContact} />
          </div>
          <div className="w-full md:w-2/3 mt-4 md:mt-0 ml-0 md:ml-4">
            <Image
              src={pageMentionsContact.imageContact.responsiveImage.src}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              alt={pageMentionsContact.imageContact.responsiveImage.alt}
            />
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="w-full md:max-w-screen-xl flex flex-col" id="mentions">
          <SectionTitle text={pageMentionsContact.titreMentions} color={reglage.couleur1.hex} />
          <Content data={pageMentionsContact.texteMentions} />
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
  const [pageMentionsContact, reglage, cagnotte] = await Promise.all([
    api.getPageMentionsContact(),
    api.getReglage(),
    api.getCagnotte(),
  ]);
  return {
    props: { ...pageMentionsContact, ...reglage, ...cagnotte },
  };
}

export default MentionsContact;
