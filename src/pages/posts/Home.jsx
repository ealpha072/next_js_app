import Head from "next/head"
import Layout from "components/Layout"
import styles from './myhome.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Welcome - Home</title>
        <meta name="description" content="Welcome to home page" />
      </Head>
      <div className={styles.homeContainer}>
        <div className={styles.intro}>
          <p>Create Beautiful Powerpoints for Modern Presentations</p>
          <h6> 
             Reimagining presentations, creating impactful presentations, 
            create powerful Powerpoint presentations with ease. Let you presentations stand out from the rest. Try us today</h6>
        </div>
      </div>
    </Layout>
  )
}
