import styles from "./styles.module.scss"

export default function ContactForm(){
    return(
        <div className={styles.container}>
            <form>
                <label htmlFor="name">Name</label>
                <br />
                <input id="name" name="name" type="text" autoComplete="name" required />
                <br /><br />
                <label htmlFor="email">Email</label>
                <br />
                <input id="email" name="emai" type="text" autoComplete="email" required />
                <br /><br />
                <label htmlFor="company">Company</label>
                <br />
                <input id="company" name="company" type="text" autoComplete="company" required />
                <br /><br />
                <label htmlFor="message">Message</label>
                <br />
                <input id="message" name="message" type="text" autoComplete="message" required />
                <br /><br />
                <button className={styles.submitButton}>Let's talk</button>
            </form>
        </div>
    )
}