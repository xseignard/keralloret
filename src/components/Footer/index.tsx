import React from 'react';
import NextLink from 'next/link';

import { motion } from 'framer-motion';

import { ReglageFragment } from '~/generated/sdk';

import { LinkWrapper } from '../LinkWrapper';

const colStyle = 'flex-1 flex flex-col items-center';

const Link = ({ href, text }: { href: string; text: string }) => {
  return (
    <NextLink href={href} passHref>
      <motion.a
        className="font-other text-xl text-white text-center py-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
      >
        {text}
      </motion.a>
    </NextLink>
  );
};

export const Footer = ({ reglage }: { reglage: ReglageFragment }) => {
  return (
    <footer className="w-full md:max-w-screen-xl">
      <div className="flex flex-col-reverse md:flex-row mb-4">
        <div className={colStyle}>
          <Link href="/faq" text="FAQ" />
          <Link href="/contact" text="Contact" />
          <Link href="/mentions" text="Mentions légales" />
        </div>
        <div className={colStyle}>
          <Link href={reglage.facebook} text="Facebook" />
          <Link href={reglage.instagram} text="Instagram" />
          <Link href={`mailto:${reglage.email}`} text="Email" />
        </div>
        <div className={`${colStyle} hidden md:flex`}>
          <Link href="/decouvrir" text={reglage.decouvrir} />
          <Link href="/approfondir" text={reglage.approfondir} />
          <Link href="/investir" text={reglage.investir} />
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <LinkWrapper className="w-fit px-4 py-2 rounded-full" bg={reglage.couleur2.hex}>
          <NextLink href="/newsletter">
            <a
              className="text-xl md:text-2xl font-other font-bold underline underline-offset-4 relative -top-0.5"
              style={{ color: reglage.couleur1.hex }}
            >
              {reglage.newsletter}
            </a>
          </NextLink>
        </LinkWrapper>
      </div>
    </footer>
  );
};
