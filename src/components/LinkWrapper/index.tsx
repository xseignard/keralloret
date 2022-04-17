import React from 'react';

import { motion } from 'framer-motion';

export const LinkWrapper: React.FC<{ className: string; bg?: string }> = ({
  children,
  className,
  bg,
}) => (
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
