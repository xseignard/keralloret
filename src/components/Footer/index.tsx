import React from 'react';
import Link from 'next/link';

import { ReglageFragment } from '~/generated/sdk';

import { LinkWrapper } from '../LinkWrapper';

const colStyle = 'flex-1 flex flex-col items-center';
const itemstyle = 'font-work-sans text-white text-center py-2';

export const Footer = ({ reglage }: { reglage: ReglageFragment }) => {
  return (
    <footer className="w-full px-5 py-8 md:max-w-screen-xl">
      <div className="flex flex-col-reverse md:flex-row mb-4">
        <div className={colStyle}>
          <Link href="/mentions">
            <a className={itemstyle}>Mentions légales</a>
          </Link>
          <Link href="/contact">
            <a className={itemstyle}>Contact</a>
          </Link>
          <Link href="/faq">
            <a className={itemstyle}>FAQ</a>
          </Link>
        </div>
        <div className={colStyle}>
          <Link href={reglage.facebook}>
            <a className={itemstyle}>Facebook</a>
          </Link>
          <Link href={reglage.instagram}>
            <a className={itemstyle}>Instagram</a>
          </Link>
          <Link href={`mailto:${reglage.email}`}>
            <a className={itemstyle}>Email</a>
          </Link>
        </div>
        <div className={`${colStyle} hidden md:flex`}>
          <Link href="/decouvrir">
            <a className={itemstyle}>{reglage.decouvrir}</a>
          </Link>
          <Link href="/approfondir">
            <a className={itemstyle}>{reglage.approfondir}</a>
          </Link>
          <Link href="/investir">
            <a className={itemstyle}>{reglage.investir}</a>
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <LinkWrapper className="w-fit px-4 py-2 rounded-full" bg={reglage.couleur2.hex}>
          <Link href="/newsletter">
            <a
              className="text-xl md:text-2xl font-noto-sans underline underline-offset-4 relative -top-0.5"
              style={{ color: reglage.couleur1.hex }}
            >
              {reglage.newsletter}
            </a>
          </Link>
        </LinkWrapper>
      </div>
    </footer>
  );
};
