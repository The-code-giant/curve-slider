import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  function drawShape(ctx, xoff, yoff) {
    ctx.beginPath();
    ctx.moveTo(584 + xoff, 97 + yoff);
    ctx.bezierCurveTo(571 + xoff, 90 + yoff, 394 + xoff, 102 + yoff, 312 + xoff, 217 + yoff);
    ctx.bezierCurveTo(220 + xoff, 346 + yoff, 43 + xoff, 294 + yoff, 26 + xoff, 301 + yoff);
    ctx.stroke();
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.cureSlider}>
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
        </div>
        <canvas id="myCanvas" width="200" height="100"
          style="border:1px solid #000000;">
        </canvas>

      </main>

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
    </div>
  )
}
