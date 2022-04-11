import React from 'react';

type Colors = 'title' | 'body';
type Sizes = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
type As = 'h1' | 'h2' | 'h3' | 'p';

export const Text: React.FC<{
  color?: Colors;
  size?: Sizes;
  bold?: boolean;
  rotate?: boolean;
  as?: As;
}> = ({ children, color = 'body', size = 'md', bold = false, rotate = false, as = 'p' }) => {
  return React.createElement(
    as,
    {
      className: `text-${color} text-${size} font-${bold ? 'bold' : 'normal'} transform -rotate-${
        rotate ? '3' : '0'
      }`,
    },
    children
  );
};
