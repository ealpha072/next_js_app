import Link from "next/link"
import Head from "next/head"
import styles from "./Loginsignup.module.css"

export default function login() {
	return (
		<>
			<Head>
				<title>Login</title>
				<meta name="description" content="Login here" />
				<script src="https://kit.fontawesome.com/49935a21c2.js" crossOrigin="anonymous"></script>
			</Head>
			<div className={styles.formContainer}>
				<form action="" className={styles.form}>
					<h2>Welcome Back</h2>

					<div  className={styles.formHolder} >
						<label htmlFor="email">Email Address</label>
						<input type="email" placeholder="Enter email address" />
					</div>
					<button className={styles.btn}>Continue</button>
					<h4>Dont have an Account ? <Link href="/routes/signup">Signup</Link></h4>

					<div className={styles.divider}>
						<div></div>
						<p>OR</p>
						<div></div>
					</div>

					<div>
						<button className={styles.btnMore}>
							<i className="fa-brands fa-google"></i>
                        Continue With Google
						</button>
						<button className={styles.btnMore}>
							<i className="fa-brands fa-microsoft"></i>
                        Continue with Microsoft Account
						</button>
					</div>
				</form>
			</div>
		</>
	)
}
