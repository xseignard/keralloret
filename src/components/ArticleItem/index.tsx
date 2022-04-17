import React from 'react';
import Image from 'next/image';

import format from 'date-fns/format';
import frLocale from 'date-fns/locale/fr';
import parseISO from 'date-fns/parseISO';

import { ArticleFragment } from '~/generated/sdk';

import { BlobWrapper } from '../BlobWrapper';
import { Content } from '../Content';

export const ArticleItem = ({ article }: { article: ArticleFragment }) => {
  return (
    <div className="flex-1 px-4">
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
      <BlobWrapper growth={0.95}>
        <div className="flex flex-col bg-white px-8 py-16">
          <span className="prose prose-sm mt-8 mb-4 font-noto-sans">
            {format(parseISO(article.date), 'dd MMMM yyyy', { locale: frLocale })}
          </span>
          <h2 className="prose prose-2xl font-work-sans">{article.titre}</h2>
          <div className="mb-8">
            <Content data={article.extrait} />
          </div>
        </div>
      </BlobWrapper>
    </div>
  );
};
