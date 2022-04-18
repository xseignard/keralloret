import React from 'react';

import { motion, SVGMotionProps } from 'framer-motion';

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path fill="transparent" strokeWidth="3" strokeLinecap="round" {...props} />
);

const MenuToggle: React.FC<{ toggle: () => void; color: string }> = ({ toggle, color }) => (
  <button
    title="menu"
    onClick={toggle}
    className="absolute z-10 right-4 border-none outline-none focus:outline-none bg-transparent"
  >
    <svg width="23" height="23" viewBox="0 0 23 23" stroke={color}>
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5', transition: { delay: 0.8 } },
          open: { d: 'M 3 16.5 L 17 2.5', transition: { delay: 0.3 } },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1, transition: { duration: 0.1, delay: 0.8 } },
          open: { opacity: 0, transition: { duration: 0.1, delay: 0.3 } },
        }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346', transition: { delay: 0.8 } },
          open: { d: 'M 3 2.5 L 17 16.346', transition: { delay: 0.3 } },
        }}
      />
    </svg>
  </button>
);

export default MenuToggle;
