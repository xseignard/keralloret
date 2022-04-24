import React from 'react';

import classNames from 'classnames';
import { StructuredText } from 'react-datocms';

import { Json } from '~/generated/dato-scalars';

export type ContentType = {
  blocks: string[];
  links: string[];
  value: Json;
};

export const Content = ({
  data,
  className = 'prose md:max-w-screen-xl md:prose-xl font-prose',
  style,
}: {
  data: ContentType;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className={classNames('dato-content', className)} style={style}>
      <StructuredText
        // @ts-expect-error umatched types
        data={data}
      />
    </div>
  );
};
