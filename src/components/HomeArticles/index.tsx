import React from 'react';
import Link from 'next/link';

import { ArticleFragment, ReglageFragment } from '~/generated/sdk';

import { ArticleItem } from '../ArticleItem';

export const HomeArticles = ({
  reglage,
  articles,
}: {
  reglage: ReglageFragment;
  articles: ArticleFragment[];
}) => {
  return (
    <div className="w-full px-5 md:max-w-screen-xl flex flex-col">
      <h2
        className="text-xl md:text-2xl font-work-sans transform -rotate-3 mb-8 md:mb-16 mt-8 md:mt-0"
        style={{ color: reglage.couleur1.hex }}
      >
        Actus fraîches
      </h2>
      <div className="flex flex-col md:flex-row justify-start md:justify-between">
        {articles.slice(0, 3).map((article, index) => {
          return <ArticleItem key={index} article={article} />;
        })}
      </div>
      <Link href="/actus">
        <a className="md:self-end">
          <h2
            className="text-xl md:text-2xl font-work-sans transform -rotate-3 mb-8 md:mb-16 underline underline-offset-4"
            style={{ color: reglage.couleur1.hex }}
          >
            + d'actus
          </h2>
        </a>
      </Link>
    </div>
  );
};
