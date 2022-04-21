import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import format from 'date-fns/format';
import frLocale from 'date-fns/locale/fr';
import parseISO from 'date-fns/parseISO';
import { motion } from 'framer-motion';

import { ArticleFragment } from '~/generated/sdk';

import { BlobWrapper } from '../BlobWrapper';
import { Content } from '../Content';

export const ArticleItem = ({ article }: { article: ArticleFragment }) => {
  return (
    <Link href={`/actu/${article.id}`} passHref>
      <motion.a
        className="font-other text-xl text-white text-center"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex-1 -mb-16">
          <div className="relative z-10">
            <BlobWrapper>
              <Image
                src={article.image.responsiveImage.src}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                alt={article.image.responsiveImage.alt}
              />
            </BlobWrapper>
          </div>
          <div className="relative -top-16">
            <BlobWrapper growth={0.95}>
              <div className="flex flex-col bg-white px-10 py-16">
                <span className="prose prose-sm mt-4 mb-4 font-prose">
                  {format(parseISO(article.date), 'dd MMMM yyyy', { locale: frLocale })}
                </span>
                <h2 className="prose prose-2xl font-other mb-4">{article.titre}</h2>
                <Content data={article.extrait} />
              </div>
            </BlobWrapper>
          </div>
        </div>
      </motion.a>
    </Link>
  );
};
