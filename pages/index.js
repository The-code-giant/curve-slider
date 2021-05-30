import styles from '../styles/curve.module.css'
import Curve from '../Components/curve'
import { useState } from 'react';
import Informational from '../Components/informational';

export default function Home() {
  const [comp,setComp] = useState("unset")
  function renderComponent(){
    if(comp==="unset") /// we can add other conditions
      return (<span className={styles.overlay}><Curve onClick={handleClick}/></span>)
    else
      return (<div className={styles.overlay}><Informational onBack={e=>setComp("unset")}/></div>)
  }
  function handleClick(e){
    setComp(e.name)
  }
  return (
    <div style={{display:'flex',alignItems:"center",height:"100vh"}}>
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
        {renderComponent()}
      </div>
    </div>
  )
}
