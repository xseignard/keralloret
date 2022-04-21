import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';

export const ApprofondirDocs = ({ docs }: { docs: { url?: string; title?: string }[] }) => {
  return (
    <div className="prose">
      <ul>
        {docs.map((doc, i) => {
          if (doc?.url && doc.title) {
            return (
              <Link key={i} href={doc.url} passHref>
                <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
                  <li>{doc.title}</li>
                </motion.a>
              </Link>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};
