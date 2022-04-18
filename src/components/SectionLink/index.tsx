import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';

export const SectionLink = ({
  href,
  text,
  color,
}: {
  href: string;
  text: string;
  color: string;
}) => {
  return (
    <Link href={href} passHref>
      <motion.a
        className="self-end text-xl md:text-2xl font-other underline underline-offset-4 mt-8 md:mt-16"
        style={{ color }}
        whileInView={{ rotate: -3 }}
        whileHover={{ scale: 1.02, rotate: -3 }}
        whileTap={{ scale: 0.95, rotate: -3 }}
      >
        {text}
      </motion.a>
    </Link>
  );
};
