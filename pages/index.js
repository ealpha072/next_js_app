import Head from 'next/head';
import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout';
import utilStyle from '../styles/utills.module.css';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout home >
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyle.headingMd}>
				<p> Lorem ipsum solo codit. I am Alpha Emmannuel Ochieng a developer at 
					Google and i have worked at all Fnag comapnies. 
					I am looking forward to worjk at metaverse 
				</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>
	</Layout>
  )
}



