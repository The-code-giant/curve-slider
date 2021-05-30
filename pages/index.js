import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import styles from '../styles/curve.module.css'

export default function Home() {
  
  function drawShape(ctx, xoff, yoff) {
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.fillStyle="#ffffff9c"
    ctx.clearRect(0,0,1200,600)
    ctx.fillRect(0,0,1200,600)

    ctx.beginPath()
    ctx.strokeStyle= "#6659cc"
    ctx.lineWidth = 7
    
    ctx.moveTo(74 + xoff, 522 + yoff);
    ctx.bezierCurveTo(152 + xoff, 522 + yoff, 436 + xoff, 554 + yoff, 634 + xoff, 296 + yoff);
    ctx.bezierCurveTo(818 + xoff, 56 + yoff, 1034 + xoff, 72 + yoff, 1124 + xoff, 80 + yoff);
    
    ctx.stroke()
    clearDots(ctx)
    drawCircles(ctx)
  }
  function clearDots(ctx){
    ctx.clearRect(120,0,60,600)
    ctx.fillRect(120,0,60,600)
    
    ctx.clearRect(420,0,60,600)
    ctx.fillRect(420,0,60,600)
    
    ctx.clearRect(720,0,60,600)
    ctx.fillRect(720,0,60,600)

    ctx.clearRect(1020,0,60,600)
    ctx.fillRect(1020,0,60,600)
  }
  function drawCircles(ctx){
    ctx.beginPath();
    ctx.arc(150, 525, 20, 0, 2 * Math.PI);
    ctx.lineWidth=7;
    ctx.stroke();
    ctx.addHitRegion({id:"Link1"})

    ctx.beginPath();
    ctx.arc(450, 450, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.addHitRegion({id:"Link2"})
    
    ctx.beginPath();
    ctx.arc(750, 180, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.addHitRegion({id:"Link3"})
    
    ctx.beginPath();
    ctx.arc(1050, 75, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.addHitRegion({id:"Link4"})
  }

  function isInRange(range,point){
    return (point.X>range.X && point.X<range.X+range.W && point.Y>range.Y && point.Y<range.Y+range.H)
  }

  useEffect(()=>{
    const c = document.getElementById("myCanvas")
    const ctx = c.getContext('2d')
    drawShape(ctx,0,0)
    c.addEventListener("mousemove",e=>{
      
      if(isInRange({X:213,Y:452,W:120,H:80},{X:e.pageX-c.offsetLeft,Y:e.pageY-c.offsetTop})){
        c.className=styles.pointer;
      }
      else
        c.className="";
    })
    c.addEventListener("click",(e)=>{
        alert(e.region);
        return;
        if(isInRange({X:213,Y:452,W:120,H:80},{X:e.pageX-c.offsetLeft,Y:e.pageY-c.offsetTop})){
          alert('link1')
        }
    })
  },[])

  return (

        <div className={styles.wrapper} style={{position:"relative"}}>
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

          <canvas id="myCanvas" width="1200" height="600" style={{border:"1px solid #000000",position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%"}}>
          </canvas>
        </div>

  )
}
