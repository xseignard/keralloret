import React from 'react';

import classNames from 'classnames';

export const SectionWrapper: React.FC<{ backgroundColor?: string; debug?: boolean }> = ({
  children,
  backgroundColor = '#ffffff',
  debug = false,
}) => {
  return (
    <section className="w-screen flex justify-center p-5" style={{ backgroundColor }}>
      <div
        className={classNames('w-full md:max-w-screen-xl', {
          'border-2 border-red-700': debug,
        })}
      >
        {children}
      </div>
    </section>
  );
};
