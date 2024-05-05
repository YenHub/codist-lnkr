'use client';

import React from 'react';

export const UrlInput: React.FC = () => {
  return (
    <input
      name="url-value"
      onChange={({ target: { value } }) => console.log(value)}
    />
  );
};
