import React from 'react';

import styles from './styles.css';

function makeDescription(paths, xScalar, yScalar) {
  return paths
    .map(path => {
      const [x, y] = path;
      return x
        .reduce((d, _, i) => `${d} ${i === 0 ? 'M' : 'L'}${x[i] * xScalar} ${y[i] * yScalar}`, '')
        .trim();
    })
    .join(' ');
}

function SVG(props) {
  const { height, width, paths } = props;
  const xScalar = width / 300;
  const yScalar = height / 300;

  return (
    <svg className={styles.path} width={width} height={height}>
      <path
        d={makeDescription(paths, xScalar, yScalar)}
        fill="transparent"
        stroke="black"
        strokeWidth="1"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeDasharray="500"
        strokeDashoffset="500"
      />
    </svg>
  );
}

export default SVG;
