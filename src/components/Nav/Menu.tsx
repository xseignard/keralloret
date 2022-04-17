import React, { useEffect } from 'react';

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { motion, useCycle } from 'framer-motion';

import { ReglageFragment } from '~/generated/sdk';

import { Link } from '.';
import MenuContent from './MenuContent';
import MenuToggle from './MenuToggle';

const sidebar = {
  open: {
    translateX: 0,
    transition: { ease: 'easeInOut', duration: 0.3 },
  },
  closed: {
    translateX: '100vw',
    transition: {
      ease: 'easeInOut',
      duration: 0.3,
      delay: 0.5,
    },
  },
};

const Menu: React.FC<{ links: Link[]; reglage: ReglageFragment }> = ({ links, reglage }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    if (isOpen) disableBodyScroll(document.body);
    else enableBodyScroll(document.body);
  }, [isOpen]);

  return (
    <motion.div initial="closed" animate={isOpen ? 'open' : 'closed'}>
      <motion.div className="fixed z-10 inset-0 h-screen bg-white" variants={sidebar} />
      <MenuContent links={links} />
      <MenuToggle toggle={() => toggleOpen()} color={reglage.couleur1.hex} />
    </motion.div>
  );
};

export default Menu;
