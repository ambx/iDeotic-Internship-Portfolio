import Link from 'next/link'
import styles from "./styles.module.scss"
import ContactForm from '../Contact-Form'

export default function Contact(){
    return(
        <div className={styles.container}>
            <br />
            <h1 className={styles.title}>Let's connect</h1>
            <hr className={styles.titleUnderline} />
            <div className={styles.gridContainer}>
                <p className={styles.gridItem}>
                    Whether you’re looking to execute an extensive content marketing campaign, get started with one or simply want an opinion on your ongoing content strategy, I’m here to help you build an organic channel of growth.
                    <br /> <br />
                    Use this form to reach me or drop me a hello on LinkedIn.
                </p>
                <div>
                   <ContactForm />
                </div>
            </div>
        </div>
    )
}