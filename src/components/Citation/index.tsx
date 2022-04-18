import React from 'react';

import { Content, ContentType } from '../Content';

export const Citation = ({
  citation,
  auteur,
  color,
}: {
  citation: ContentType;
  auteur: string;
  color: string;
}) => {
  return (
    <div className="flex flex-col">
      <Content data={citation} className="text-4xl font-bold font-other" style={{ color }} />
      <span className="text-2xl font-bold font-other mt-4" style={{ color }}>
        {auteur}
      </span>
    </div>
  );
};
