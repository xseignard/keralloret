import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import { useBlob } from '~/hooks/useBlob';

export const BlobWrapper: React.FC<{
  className?: HTMLAttributes<HTMLDivElement>['className'];
  style?: HTMLAttributes<HTMLDivElement>['style'];
  /** how far from the center the points will be */
  growth?: number;
  /** how many points to create the shape */
  pointCount?: number;
}> = ({ children, className, style, growth = 0.8, pointCount = 8 }) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const generator = useBlob();
  const [path, setPath] = useState<string>();
  const [id, setId] = useState<string>();

  useEffect(() => {
    if (wrapper.current) {
      const { width, height } = wrapper.current.getBoundingClientRect();
      const p = generator({ width, height, growth, pointCount });
      console.log(p);
      setPath(p);
      setId(uuidv4());
    }
  }, [generator, growth, pointCount, wrapper]);

  return (
    <div
      ref={wrapper}
      className={classNames('relative', className)}
      style={{ clipPath: `url(#${id})`, ...style }}
    >
      <svg width="0" height="0">
        <defs>
          <clipPath id={id}>
            <path d={path} />
          </clipPath>
        </defs>
      </svg>
      {children}
    </div>
  );
};
