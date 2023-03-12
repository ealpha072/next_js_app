import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'
import Logo from '../public/logo.webp'


export default function Header() {
	return (
		<header className={styles.header}>
			<div>
				<Image 
					src={Logo}
					alt='App Logo'
					height={30}
					width={30}
				/>
				<h1>Alpha Site</h1>
			</div>
			<div>
				<Link href='/routes/Home'> Pricing </Link>
				<Link href='/routes/signup'>Sign Up</Link>
				<Link href='/routes/login'>Login</Link>
			</div>
		</header>
	)
}
