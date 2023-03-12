import Head from "next/head"
import Image from "next/image"
import styles from './myhome.module.css'
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

import ppt from "../../assets/ppt.jpg"
import ppt1 from "../../assets/ppt1.jpg"
import ppt2 from "../../assets/ppt2.jpg"
import ppt3 from "../../assets/ppt3.jpg"

export default function Home() {
	return (
		<>
			<Head>
				<title>Welcome - Home</title>
				<meta name="description" content="Welcome to home page" />
			</Head>
			<Header />
			<div className={styles.homeContainer}>
				<div className={styles.intro}>
					<p>Create Beautiful Powerpoints for Modern Presentations</p>
					<h6>
						Re-imagining presentations, creating impactful presentations,
						create powerful Powerpoint presentations with ease. Let you presentations stand out from the rest. Try us today
					</h6>
				</div>

				<div className={styles.topDiv}>
					<div className={styles.create}>
						<p>Create &gt; <span>Presentations </span></p>
						<h1>Online Presentation Maker for Engaging Presentations </h1>
						<button> Create Your Presentation</button>
						<h2>Its free and easy to use</h2>
					</div>

					<div className={styles.imageContainer}>
						<Image src={ppt} width={675} height={391} alt="Pre" />
					</div>
				</div>

				<div className={styles.chosen} >
					<h1>Features of the <span>Presentation </span>Maker </h1>
					<p>
						Alpha&apos;s free online presentation maker was built by designers
						for non-designers to help you create presentations that your audience will love,
						without needing an eye for design.
					</p>
				</div>

				<div className={styles.rightAlign}>
					<div className={styles.imgCont}>
						<Image src={ppt1} width={576} height={473} alt="" />
					</div>
					<div className={styles.featureCont}>
						<h1>Beautiful presentation themes</h1>
						<p>
							Choose from one of our presentation themes with hundreds of
							available slide layouts for you to pick from and build a beautiful presentation.
							Find slide layouts to fit any type of information you need to communicate within
							your presentation and customize them to perfectly fit your brand or topic.
						</p>
						<button>Create Your Presentation</button>
					</div>
				</div>

				<div className={styles.rightAlign}>
					<div className={styles.featureCont} style={{ padding:"0 7%  0 0" }}>
						<h1>Customize every aspect of your presentation with your own images and text</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus qui repellat
							numquam earum amet eligendi nobis veniam similique tempora reiciendis consequuntur
							maxime, atque repudiandae, modi labore. Voluptates repellendus voluptatibus ratione!
						</p>
						<button>Create Your Presentation</button>
					</div>
					<div className={styles.imgCont}>
						<Image src={ppt2} width={576} height={473} alt="" />
					</div>
				</div>

				<div className={styles.rightAlign}>
					<div className={styles.imgCont}>
						<Image src={ppt3} width={576} height={473} alt="" />
					</div>
					<div className={styles.featureCont}>
						<h1>Build your presentation</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus qui repellat
							numquam earum amet eligendi nobis veniam similique tempora reiciendis consequuntur
							maxime, atque repudiandae, modi labore. Voluptates repellendus voluptatibus ratione!
						</p>
						<button>Create Your Presentation</button>
					</div>
				</div>

				<div className={styles.bottomDiv}>
					<h1>
						Your <span>presentations</span> deserve to be <span>beautiful</span> and so does the rest of your content
					</h1>
					<p>Create visual brand experiences whether you are a seasoned designer or a total novice.</p>
					<button>Sign Up. Its Free!</button>
				</div>
			</div>

			<Footer />
		</>
	)
}
