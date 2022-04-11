import React from 'react';
import Image from 'next/image';

import { ArticleFragment } from '~/generated/sdk';

import { BlobWrapper } from '../BlobWrapper';

export const ActusItem = ({ article }: { article: ArticleFragment }) => {
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
      <div className="flex justify-center">
        <h3 className="text-xl md:text-2xl font-work-sans">{article.titre}</h3>
      </div>
    </div>
  );
};
