import Header from "./Header"
import Footer from "./Footer"
import React from "react"
import styles from './Layout.module.css'

export default function Layout({children}: {children:React.ReactNode}) {
  return (
    <>
        <Header />
        <div className={styles.mainContainer}>
          { children }
        </div>
        <Footer />
    </>
  )
}
