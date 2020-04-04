import React from 'react';
import styles from './Skills3.module.css'


function Skills3() {
    return (
        <div className={styles.skills3}>
            <div className={styles.icon}><img src="" alt='icon'/></div>
            <p className={styles.title}>React</p>
            <div className={styles.description}>
                <p>Подробное описание навыка</p>
            </div>
        </div>
    );
}

export default Skills3;
