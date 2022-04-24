import React from 'react';
import type { AppProps } from 'next/app';

// @ts-expect-error - cannot find type defs
import { LightgalleryProvider } from 'react-lightgallery';

import 'tailwindcss/tailwind.css';
import 'lightgallery.js/dist/css/lightgallery.css';
import '~/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LightgalleryProvider lightgallerySettings={{ download: false }}>
      <Component {...pageProps} />
    </LightgalleryProvider>
  );
}

export default MyApp;
