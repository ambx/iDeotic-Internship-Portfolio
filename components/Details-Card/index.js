import styles from "./styles.module.scss"
import '@fortawesome/fontawesome-free/css/all.css';


export default function DetailCard(props){
    return(
        <div className={styles.testimonialCard}>
            <i id="uspIcon" class={props.icon} />
            <h2>{props.title}</h2>
            <p>{props.quote}</p>
            <p className={styles.byline}>{props.name} {props.designation}</p>
        </div>
    )
}