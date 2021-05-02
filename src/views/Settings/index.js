import React from 'react';
import CountryBox from '../../components/CountryBox';
import VisualDisabledMode from '../../components/VisualDisabledMode';
import styles from './settings.module.css';

function Settings() {
    return (
        <div className={styles.container}>
            <div className={styles.countryContainer}>
                <h2 className={styles.title}>Language Preferences:</h2>
                <CountryBox />
            </div>
            <div className={styles.visualDisableContainer}>
                <h2 className={styles.title}>Visual disable mod:</h2>
                <VisualDisabledMode />
            </div>
        </div>
    )
}

export default Settings;