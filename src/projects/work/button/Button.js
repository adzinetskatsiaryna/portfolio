import React from 'react';
import styles from './Button.module.css'

function Button () {
  return (
    <div className={styles.button}>
      <button type="submit" value="button">Смотреть</button>
    </div>
  );
}

export default Button;
