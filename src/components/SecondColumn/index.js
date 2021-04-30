import React from 'react';
import styles from './secondColumn.module.css';
function SecondColumn({name}) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{name}</div>
        </div>
    )
}

export default SecondColumn;