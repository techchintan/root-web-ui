import React from 'react';
import { IconProps } from '../../../types/common';

export default function RightArrowIocn({ color = 'black' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.172 11.0002L10.808 5.63617L12.222 4.22217L20 12.0002L12.222 19.7782L10.808 18.3642L16.172 13.0002H4V11.0002H16.172Z"
        fill={color}
      />
    </svg>
  );
}
