import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { BlobImage } from '~/component/BlobImage';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Head>
        <title>Keralloret</title>
        <meta name="description" content="Keralloret" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BlobImage src="https://placekitten.com/g/320/240" width={320} height={240} />
        <BlobImage src="https://placekitten.com/g/320/320" width={320} height={320} />
        <BlobImage src="https://placekitten.com/g/240/320" width={240} height={320} />
        <BlobImage
          src="https://placekitten.com/g/320/240"
          width={320}
          height={240}
          growth={0.7}
          pointCount={20}
        />
        <BlobImage
          src="https://placekitten.com/g/320/240"
          width={320}
          height={240}
          growth={0.6}
          pointCount={30}
        />
        <BlobImage
          src="https://placekitten.com/g/320/240"
          width={320}
          height={240}
          growth={0.5}
          pointCount={40}
        />
      </main>
    </div>
  );
};

export default Home;
