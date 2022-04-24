import Link from 'next/link'
import styles from "./styles.module.scss"

export default function Hero(){
    return(
        <div className={styles.container}>
            <div className={styles.main}>
                <div>
                    <h1>Hey, I'm Hiba</h1>
                    <p>
                        I build content marketing strategies for B2B SaaS companies. <br/><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <br />
            <button className={styles.button}>Let's connect</button>
            </div>
        </div>
    )
}