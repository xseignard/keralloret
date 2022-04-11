import React from 'react';
import Link from 'next/link';

import classNames from 'classnames';
import { motion } from 'framer-motion';

import { ReglageFragment } from '~/generated/sdk';

import Menu from './Menu';

export type Link = { text: string; href: string };

const Wrapper: React.FC<{ className: string; bg?: string }> = ({ children, className, bg }) => (
  <motion.div
    className={className}
    style={{ backgroundColor: bg }}
    whileInView={{ rotate: -3 }}
    whileHover={{ scale: 1.02, rotate: -3 }}
    whileTap={{ scale: 0.95, rotate: -3 }}
  >
    {children}
  </motion.div>
);

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
    <nav
      id="nav"
      className="flex justify-center items-center md:flex-row flex-1 pt-6 pb-6 md:pb-12 nav-height"
    >
      <div className="hidden md:flex flex-row">
        {links.map(({ text, href }, index) => {
          const isLast = index === links.length - 1;
          return (
            <Wrapper
              key={index}
              className={classNames('py-2 px-6', {
                'ml-8 mr-0 rounded-full': isLast,
                'ml-0 mr-8': !isLast,
              })}
              bg={isLast ? reglage.couleur2.hex : 'unset'}
            >
              <Link href={href}>
                <a
                  className={classNames('text-xl md:text-2xl font-noto-sans', {
                    'underline underline-offset-4 relative -top-0.5': isLast,
                  })}
                  style={{ color: isLast ? reglage.couleur1.hex : 'unset' }}
                >
                  {text}
                </a>
              </Link>
            </Wrapper>
          );
        })}
      </div>
      <div className="block md:hidden">
        <Menu links={links} />
      </div>
    </nav>
  );
};
