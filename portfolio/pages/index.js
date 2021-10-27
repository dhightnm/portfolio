import About from '../pages/components/about'
import NavBar from './components/NavBar'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SSRProvider from 'react-bootstrap/SSRProvider';
import { Button, Row, Script } from 'react-bootstrap';


export default function Home() {
  return (
  <SSRProvider>
    <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
    <script
      src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
    <script
      src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
    <script>var Alert = ReactBootstrap.Alert;</script>

    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          <Row className="mx-0">
            <Button className={styles.button}>Button #1</Button>
          </Row>
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
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
  </SSRProvider>
  )
}
