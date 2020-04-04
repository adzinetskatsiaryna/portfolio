import React from 'react';
import styles from './Skills.module.css'
import Skills1 from "./skilses/Skills1";
import Skills2 from "./skilses/Skills2";
import Skills3 from "./skilses/Skills3";


function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <h2>Мои скиллы</h2>
        <div className={styles.content}>
            <Skills1/>
            <Skills2/>
            <Skills3/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
