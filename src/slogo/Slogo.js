import React from 'react';
import styles from './Slogo.module.css'
import ButtonSlogo from "./button/ButtonSlogo";

function Slogo() {
  return (
    <div className={styles.slogo}>
        <div className={styles.container}>
          <p>Рассматриваю варианы удаленной работы. + мотивационоое письмо</p>
            <ButtonSlogo/>
        </div>
    </div>
  );
}

export default Slogo;
