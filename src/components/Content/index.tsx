import React from 'react';

import { StructuredText } from 'react-datocms';

import { Json } from '~/generated/dato-scalars';

type ContentType = {
  blocks: string[];
  links: string[];
  value: Json;
};

export const Content = ({ data }: { data: ContentType }) => {
  return (
    <div className="prose md:max-w-screen-xl md:prose-xl font-noto-sans">
      <StructuredText
        // @ts-expect-error umatched types
        data={data}
      />
    </div>
  );
};
