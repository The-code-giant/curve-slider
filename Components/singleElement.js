import React, { useState } from 'react';
import styles from '/styles/Home.module.css'
export default function SubElement() {
    return (
        <>
            <div className={styles.singleElement}>
                <div>
                    <div className={styles.topDiv}>
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
        </>
    )
}