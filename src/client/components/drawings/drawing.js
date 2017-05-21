import React from 'react';

import SVG from '../svg';
import styles from './styles.css';

function Drawing(props) {
  return (
    <div className={styles.drawing}>
      <SVG height={30} width={30} paths={props.src.drawing} />
    </div>
  );
}

export default Drawing;
