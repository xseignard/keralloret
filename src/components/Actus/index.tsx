import React, { useEffect, useRef, useState } from 'react';

import { ArticleFragment, PageAccueilFragment, ReglageFragment } from '~/generated/sdk';

import { ActusItem } from '../ActusItem';
import { BlobWrapper } from '../BlobWrapper';
import { Content } from '../Content';

export const Actus = ({
  reglage,
  articles,
}: {
  reglage: ReglageFragment;
  articles: ArticleFragment[];
}) => {
  return (
    <div className="w-full px-5 md:max-w-screen-xl flex flex-col">
      <h2
        className="text-xl md:text-2xl font-work-sans transform -rotate-3 mb-16"
        style={{ color: reglage.couleur1.hex }}
      >
        Actus fraîches
      </h2>
      <div className="flex flex-col md:flex-row justify-start md:justify-between">
        {articles.map((article, index) => {
          return <ActusItem key={index} article={article} />;
        })}
      </div>
    </div>
  );
};
