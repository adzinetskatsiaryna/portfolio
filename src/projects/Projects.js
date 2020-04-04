import React from 'react';
import styles from './Projects.module.css'
import Work1 from "./work/Work1";
import Work2 from "./work/Work2";

function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <h2>Мои работы</h2>
        <div className={styles.content}>
            <Work1/>
            <Work2/>
        </div>
      </div>
    </div>
  );
}

export default Projects;
