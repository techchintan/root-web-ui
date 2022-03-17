import React from 'react';
import { IconProps } from '../../../types/common';

export default function CokkieIcon({ width, height, className }: IconProps) {
  return (
    <svg
      width={width || '40'}
      height={height || '40'}
      viewBox="0 0 50 50"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.023 49.8C11.37 49.8.263 38.695.263 25.04.263 15.576 5.8 6.811 14.37 2.715a2.188 2.188 0 013.086 1.553c.208 1.07 1.043 3.556 4.29 3.556 2.269 0 3.348-1.226 3.853-2.258a2.185 2.185 0 014.145 1.021c-.043 1.672.42 3.171 1.241 4.017 1.088 1.115 2.97 1.189 5.476.29a2.179 2.179 0 012.508.78 2.18 2.18 0 01-.051 2.625c-.953 1.218-1.043 3.007-.234 4.668.962 1.974 2.888 3.152 5.152 3.152.976 0 1.838-.21 2.637-.64a2.19 2.19 0 012.09.006 2.188 2.188 0 011.127 1.76l.02.27c.037.507.073 1.01.073 1.525 0 13.654-11.106 24.76-24.76 24.76zM14.135 7.832C8.295 11.54 4.633 18.06 4.633 25.04c0 11.245 9.147 20.391 20.39 20.391 10.794 0 19.657-8.432 20.349-19.054-.502.074-1.013.111-1.535.111-3.916 0-7.395-2.148-9.08-5.606-.796-1.634-1.109-3.366-.955-5.01-.124.002-.245.005-.367.005-2.23 0-4.159-.77-5.578-2.224a8.254 8.254 0 01-1.667-2.575c-1.284.729-2.792 1.116-4.443 1.116-3.363 0-6.131-1.645-7.612-4.362zM47.964 5.013a1.82 1.82 0 11-3.64 0 1.82 1.82 0 013.64 0z"
        fill="#fff"
      />
      <path
        d="M14.343 22.773a3.095 3.095 0 100-6.19 3.095 3.095 0 000 6.19zM16.588 34.931a3.095 3.095 0 100-6.19 3.095 3.095 0 000 6.19zM27.937 38.817a3.095 3.095 0 100-6.19 3.095 3.095 0 000 6.19zM26.547 26.456a3.095 3.095 0 100-6.19 3.095 3.095 0 000 6.19zM39.163 3.802a2.852 2.852 0 11-5.703-.003 2.852 2.852 0 015.703.003zM46.507 16.666a2.003 2.003 0 100-4.006 2.003 2.003 0 000 4.006z"
        fill="#fff"
      />
    </svg>
  );
}
