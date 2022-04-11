import * as React from 'react';
import NextLink from 'next/link';

import classNames from 'classnames';
import { motion } from 'framer-motion';

import { Link } from './index';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

const MenuItem: React.FC<{ link: Link; isLast: boolean }> = ({ link: { text, href }, isLast }) => {
  return (
    <motion.li
      className={classNames('text-xl md:text-2xl font-bold cursor-pointer', {
        'px-4 py-2 bg-yellow rounded-full': isLast,
      })}
      variants={variants}
      whileInView={{ rotate: -3 }}
      whileHover={{ scale: 1.1, rotate: -3 }}
      whileTap={{ scale: 0.95, rotate: -3 }}
    >
      <NextLink href={href}>
        <a
          className={classNames('text-xl md:text-2xl font-noto-sans', {
            'text-blue underline underline-offset-4 relative -top-0.5': isLast,
          })}
        >
          {text}
        </a>
      </NextLink>
    </motion.li>
  );
};

export default MenuItem;
