import React, { useState } from 'react';
import FirstFloor from '../../components/FirstFloor';
import SecondFloor from '../../components/SecondFloor';
import styles from './home.module.css';
function HomePage() {
    const [floor, setFloor] = useState(1);
    return(
        <div className={styles.container}>
            {floor === 1 ? <FirstFloor /> : <SecondFloor />}
            <button onClick={() => setFloor(floor + 1)}>up</button>
            <button onClick={() => setFloor(floor - 1)}>down</button>
        </div>
        
    )
}

export default HomePage;