import React from 'react';
import { IconProps } from '../../../types/common';

export default function DownArrowIocn({ color = 'black' }: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.0001 16.172L18.3641 10.808L19.7781 12.222L12.0001 20L4.22208 12.222L5.63608 10.808L11.0001 16.172V4L13.0001 4V16.172Z"
        fill={color}
      />
    </svg>
  );
}
