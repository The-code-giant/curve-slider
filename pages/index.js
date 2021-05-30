import Head from 'next/head'
import Image from 'next/image'
import SingleElement from '../Components/singleElement';
import styles from '../styles/curve.module.css'
import Curve from '../Components/curve'
import { useState } from 'react';
import { render } from 'react-dom';
import Informational from '../Components/informational';

export default function Home() {
  const [comp,setComp] = useState("unset")
  function renderComponent(){
    if(comp==="unset")
      return;
    else if(comp==="Informational")
      return (<div className={styles.overlay}><Informational onBack={e=>{e.preventDefault(); setComp("unset")}}/></div>)
  }
  function handleClick(e){
    setComp(e.name)
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.img_cont}>
          <img src="/images/informational.jpg" />
        </div>

        <div className={styles.img_cont}>
          <img src="/images/automation.png" />
        </div>

        <div className={styles.img_cont}>
          <img src="/images/integrated.jpg" />
        </div>

        <div className={styles.img_cont}>
          <img src="/images/automated1.jpg" />
        </div>
        <Curve onClick={handleClick}/>
        {renderComponent()}
      </div>

    </>
  )
}
