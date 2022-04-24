import Link from 'next/link'
import styles from "./styles.module.scss"

export default function DetailCard(props){
    return(
        <div className={styles.testimonialCard}>
            <h2>{props.title}</h2>
            <p>{props.quote}</p>
            <p className={styles.byline}>{props.name} {props.designation}</p>
        </div>
    )
}