import React from 'react';

import classNames from 'classnames';

export const SectionWrapper: React.FC<{
  backgroundColor?: string;
  width?: 'regular' | 'article';
  debug?: boolean;
}> = ({ children, backgroundColor = '#ffffff', width = 'regular', debug = false }) => {
  return (
    <section className="w-screen flex justify-center p-5" style={{ backgroundColor }}>
      <div
        className={classNames('w-full', {
          'border-2 border-red-700': debug,
          'md:max-w-screen-xl': width === 'regular',
          'md:max-w-[65ch]': width === 'article',
        })}
      >
        {children}
      </div>
    </section>
  );
};
