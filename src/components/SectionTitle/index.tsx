import React from 'react';

export const SectionTitle = ({ text, color }: { text: string; color: string }) => {
  return (
    <h2
      className="text-2xl md:text-4xl font-other transform -rotate-3 mb-8 md:mb-16"
      style={{ color }}
    >
      {text}
    </h2>
  );
};
