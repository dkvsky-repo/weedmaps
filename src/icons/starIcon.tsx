import React from 'react';
import { IconParams } from './icons';

type StarIconProps = IconParams & {
  type: string;
};

function StarIcon(props: StarIconProps) {
  const foregroundColor = '#00A8A3';
  const backgroundColor = '#DDDDDD';

  let fillColor: {
    left: string;
    right: string;
  } = {
    left: '',
    right: '',
  };

  switch (props.type) {
    case 'half':
      fillColor.left = foregroundColor;
      fillColor.right = backgroundColor;
      break;
    case 'full':
      fillColor.left = foregroundColor;
      fillColor.right = foregroundColor;
      break;
    case 'empty':
    default:
      fillColor.left = backgroundColor;
      fillColor.right = backgroundColor;
  }

  return (
    <svg
      aria-hidden='true'
      data-prefix='fad'
      data-icon='star-half'
      viewBox='0 0 576 512'
      {...props}
    >
      <path
        fill={fillColor.right}
        d='M545.3 226L439.6 329l25 145.5c4.5 26.1-23 46-46.4 33.7l-130.7-68.6V0a31.62 31.62 0 0128.7 17.8l65.3 132.4 146.1 21.2c26.2 3.8 36.7 36.1 17.7 54.6z'
      />
      <path
        fill={fillColor.left}
        d='M110.4 474.5l25-145.5L29.7 226c-19-18.5-8.5-50.8 17.7-54.6l146.1-21.2 65.3-132.4A31.62 31.62 0 01287.5 0v439.6l-130.7 68.6c-23.4 12.3-50.9-7.6-46.4-33.7z'
      />
    </svg>
  );
}

export default StarIcon;
