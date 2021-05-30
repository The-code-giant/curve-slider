import { useEffect } from 'react'
import styles from '../styles/informational.module.css'
export default function Informational(props){
    return(
        <div id="abc" className={styles.wrapper}>
            <a className={styles.back} onClick={props.onBack} href="#">Back to Maturity Curve</a>
            <div>
                <div>
                    <h2>Digitalized</h2>
                    <span>Level two</span>
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
                </div>

                <div className={styles.buttomDiv}>
                    <ul>
                        <li>
                            Data influenced decition culture
                    </li>
                        <li>
                            Data influenced decition culture
                    </li>
                        <li>
                            Data influenced decition culture
                    </li>
                        <li>
                            Data influenced decition culture
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}