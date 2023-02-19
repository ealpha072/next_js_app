import Link from "next/link"
import Head from "next/head"
import Layout from "../../../components/Layout"

export default function login() {
  return (
    <Layout>
        <Head>
            <title>Login</title>
            <meta name="description" content="Login here" />
        </Head>
        <div>
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
                    <Link href='/'>Login <i className='fa fa-arrow-right'></i></Link>
                </div>
            </form>
        </div>
    </Layout>
  )
}
