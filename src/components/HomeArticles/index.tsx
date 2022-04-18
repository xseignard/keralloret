import React from 'react';

import { ArticleFragment, ReglageFragment } from '~/generated/sdk';

import { ArticleItem } from '../ArticleItem';
import { SectionLink } from '../SectionLink';
import { SectionTitle } from '../SectionTitle';

export const HomeArticles = ({
  reglage,
  articles,
}: {
  reglage: ReglageFragment;
  articles: ArticleFragment[];
}) => {
  return (
    <div className="flex flex-col">
      <SectionTitle text="Actus fraîches" color={reglage.couleur1.hex} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {articles.slice(0, 3).map((article, index) => {
          return <ArticleItem key={index} article={article} />;
        })}
      </div>
      <SectionLink href="/actus" text="+ d'actus" color={reglage.couleur1.hex} />
    </div>
  );
};
