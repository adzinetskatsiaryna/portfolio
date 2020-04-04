import React from 'react';
import styles from './Contacts.module.css'

function Contacts() {
  return (
    <div className={styles.contacts}>
        <div className={styles.container}>
            <h2>Контакты</h2>
            <form className={styles.serchForm}>
                <input type="text" placeholder="Ваше Имя"/>
                <input type="text" placeholder="....."/>
                <textarea placeholder="Ваше сообщение"></textarea>
                <button type="submit" value="button" className={styles.formButton}>Отправить</button>
            </form>
        </div>
    </div>
  );
}

export default Contacts;
