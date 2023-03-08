import Head from "next/head"
import Header from "../../../components/Header"
import styles from './pricing.module.css'

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
        </>
    )
}