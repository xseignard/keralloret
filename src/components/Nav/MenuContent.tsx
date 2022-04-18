import React from 'react';

import { motion } from 'framer-motion';

import { Link } from './index';
import MenuItem from './MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.11, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const MenuContent: React.FC<{ links: Link[] }> = ({ links }) => (
  <div className="absolute z-10 inset-0 h-screen" style={{ padding: '50% 0' }}>
    <motion.ul
      className="flex flex-col justify-between items-center"
      style={{ height: '100%' }}
      variants={variants}
    >
      {links.map((link, i) => (
        <MenuItem link={link} key={i} isLast={i === links.length - 1} />
      ))}
    </motion.ul>
  </div>
);

export default MenuContent;
