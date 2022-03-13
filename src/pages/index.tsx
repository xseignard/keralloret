import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Head>
        <title>Keralloret</title>
        <meta name="description" content="Keralloret" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Coucou</h1>
      </main>
    </div>
  );
};

export default Home;
