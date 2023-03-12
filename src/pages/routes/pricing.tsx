import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import styles from './pricing.module.css'

//images
import img_1 from "../../assets/im1.png"
import img_2 from "../../assets/img2.png"
import img_3 from "../../assets/woman_chart.png"
import img_4 from "../../assets/person.png"

export default function Pricing(){
	return(
		<>
			<Head>
				<title>Pricing - Alpha Site</title>
				<meta name="description" content="Pricing details" />
			</Head>
			<Header />
			<div className={styles.mainPricing}>
				<div className={styles.pricingContainer}>
					<div>
						<h1>Create better content. Faster</h1>
						<p>
                            Create, manage and design anything in one place 
                            Trusted by leading teams and organizations.
						</p>
						<div className={styles.buttons}>
							<button>Monthly</button>
							<button>Annually</button>
						</div>
					</div>
				</div>

				<div className={styles.pricingCardCont}>
					<div className={styles.priceCard}>
						<h1>Basic</h1>
						<p>Use it at no cost <br /> Use it as long as you want </p>

						<div>
							<h2>Free</h2>
							<button>Get Started</button>
						</div>

						<div>
							<h3>Access to:</h3>
							<ul>
								<li>100 MB Storage</li>
								<li>Template Design Assets</li>
								<li>Most templates</li>
							</ul>
						</div>
					</div>

					<div className={styles.priceCard}>
						<h1>Basic</h1>
						<p>Use it at no cost <br /> Use it as long as you want </p>

						<div>
							<h2>Free</h2>
							<button>Get Started</button>
						</div>

						<div>
							<h3>Access to:</h3>
							<ul>
								<li>100 MB Storage</li>
								<li>Template Design Assets</li>
								<li>Most templates</li>
							</ul>
						</div>
					</div>

					<div className={styles.priceCard}>
						<h1>Basic</h1>
						<p>Use it at no cost <br /> Use it as long as you want </p>

						<div>
							<h2>Free</h2>
							<button>Get Started</button>
						</div>

						<div>
							<h3>Access to:</h3>
							<ul>
								<li>100 MB Storage</li>
								<li>Template Design Assets</li>
								<li>Most templates</li>
							</ul>
						</div>
					</div>

				</div>
			</div>

			<div className={styles.packageCont}>
				<div className={styles.packageDiv}>
					<div className={styles.smallHolder}>
						<h1>Students Package</h1>
						<p>Lore ipsum lorem ipsum <br /> lorem lorem ipsum lorem ipsum</p>

						<Link href="/" >View Pricing</Link>
					</div>
					<div>
						<Image src={img_2} alt="" width={124} height={76} />
					</div>
				</div>
				<div className={styles.packageDiv}>
					<div className={styles.smallHolder}>
						<h1>Students Package</h1>
						<p>Lore ipsum lorem ipsum <br /> lorem lorem ipsum lorem ipsum</p>

						<Link href="/" >View Pricing </Link>
					</div>
					<div>
						<Image src={img_1} alt="" width={124} height={76} />
					</div>
				</div>
			</div>

			<div className={styles.womanChartCont}>
				<div>
					<Image src={img_3} alt="" width={148} height={120} />
				</div>
				<div className={styles.summaryPriceCont}>
					<div className={styles.summaryPrice}>
						<div>
							<h1>Basic</h1>
							<h2>It &apos;s free</h2>
							<p>/month, billed yearly</p>
							<button>Start Free</button>
						</div>
					</div>
					<div className={styles.summaryPrice}>
						<div>
							<h1>Basic</h1>
							<h2><span>US</span> $10.50</h2>
							<p>/month, billed yearly</p>
							<button>Start Free</button>
						</div>
					</div>
					<div className={styles.summaryPrice}>
						<div>
							<h1>Basic</h1>
							<h2><span>US</span> $15.50</h2>
							<p>/month, billed yearly</p>
							<button>Start Free</button>
						</div>
					</div>
                   
				</div>
			</div>

			<div className={styles.testimonialsCont}>
				<div className={styles.testimonials}>
					<div>
						<div className={styles.innerChild}>
							<div>
								<Image src={img_4} alt="" width={50} height={50} />
								<h1>Alpha Emmanuel Christine</h1>
							</div>
							<p>
                                &quot;Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Facere, in culpa! Quae 
                                omnis nisi cum quidem blanditiis optio iure. 
                                Voluptatum minus cumque, explicabo perferendis 
                                porro laudantium necessitatibus atque cupiditate 
                                et.&quot;
							</p>
						</div>
					</div>

					<div>
						<div className={styles.innerChild}>
							<div>
								<Image src={img_4} alt="" width={50} height={50} />
								<h1>Alpha Emmanuel Christine</h1>
							</div>
							<p>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Facere, in culpa! Quae 
                                omnis nisi cum quidem blanditiis optio iure. 
                                Voluptatum minus cumque, explicabo perferendis 
                                porro laudantium necessitatibus atque cupiditate 
                                et.
							</p>
						</div>
					</div>

					<div>
						<div className={styles.innerChild}>
							<div>
								<Image src={img_4} alt="" width={50} height={50} />
								<h1>Alpha Emmanuel Christine</h1>
							</div>
							<p>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Facere, in culpa! Quae 
                                omnis nisi cum quidem blanditiis optio iure. 
                                Voluptatum minus cumque, explicabo perferendis 
                                porro laudantium necessitatibus atque cupiditate 
                                et.
							</p>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}