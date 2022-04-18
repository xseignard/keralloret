import React from 'react';
import Link from 'next/link';

import classNames from 'classnames';

import { ReglageFragment } from '~/generated/sdk';

import { LinkWrapper } from '../LinkWrapper';
import Menu from './Menu';

export type Link = { text: string; href: string };

export const Nav = ({ reglage }: { reglage: ReglageFragment }) => {
  const links: Link[] = [
    {
      text: reglage.accueil,
      href: '/',
    },
    {
      text: reglage.decouvrir,
      href: '/decouvrir',
    },
    {
      text: reglage.approfondir,
      href: '/approfondir',
    },
    {
      text: reglage.investir,
      href: '/investir',
    },
    {
      text: reglage.newsletter,
      href: '/newsletter',
    },
  ];

  return (
    <nav id="nav" className="nav-height">
      <div className="hidden md:flex flex-row w-full justify-between">
        {links.map(({ text, href }, index) => {
          const isLast = index === links.length - 1;
          return (
            <LinkWrapper
              key={index}
              className={classNames('py-2 px-6', {
                'ml-16 rounded-full': isLast,
              })}
              bg={isLast ? reglage.couleur2.hex : 'unset'}
            >
              <Link href={href}>
                <a
                  className={classNames('text-xl md:text-2xl font-other', {
                    'underline underline-offset-4 relative -top-0.5': isLast,
                  })}
                  style={{ color: isLast ? reglage.couleur1.hex : 'unset' }}
                >
                  {text}
                </a>
              </Link>
            </LinkWrapper>
          );
        })}
      </div>
      <div className="block md:hidden">
        <Menu links={links} reglage={reglage} />
      </div>
    </nav>
  );
};
