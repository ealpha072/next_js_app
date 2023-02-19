import Link from "next/link"
import Head from "next/head"
import Layout from "../../../components/Layout"
import styles from "./Loginsignup.module.css"

export default function signup() {
  return (
    <Layout>
        <Head>
            <title>Login</title>
            <meta name="description" content="Login here" />
        </Head>
        <div className={styles.formContainer}>
            <form action="">
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Email Address' />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Email Address' />
                </div>
                <div>
                    <Link href='/'>Sign Up</Link>
                </div>
            </form>
        </div>
    </Layout>
  )
}
