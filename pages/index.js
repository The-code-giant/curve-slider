import Head from 'next/head'
import Image from 'next/image'
import SingleElement from '../Components/singleElement';
import styles from '../styles/curve.module.css'
import Curve from '../Components/curve'
import { useState } from 'react';
import { render } from 'react-dom';

export default function Home() {
  const [comp,setComp] = useState("unset")
  function renderComponent(){
    if(comp==="unset")
      return;
    else if(comp==="Informational")
      return (<div className={styles.overlay}><SingleElement/></div>)
  }
  function handleClick(e){
    setComp(e.name)
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <img src="/images/informational.jpg" />
        </div>

        <div>
          <img src="/images/informational.jpg" />
        </div>

        <div>
          <img src="/images/informational.jpg" />
        </div>

        <div>
          <img src="/images/informational.jpg" />
        </div>
        <Curve onClick={handleClick}/>
        {renderComponent()}
      </div>
      <SingleElement />
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}
