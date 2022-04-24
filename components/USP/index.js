import styles from "./styles.module.scss"
import '@fortawesome/fontawesome-free/css/all.css';



export default function USP(){
    return(
        <div className={styles.container} >
            <br />
            <h1>Everything I write is</h1>
            <br /> <br />
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                <i id="uspIcon" class="fa-solid fa-circle-check"></i>
                    <h2>Clear</h2>
                    <p>Nobody wants their jargon with a side of bullshit. Nobody</p>
                </div>
                <div className={styles.gridItem}>
                    <i id="uspIcon" class="fa-solid fa-magnifying-glass-dollar"></i>
                    <h2>SEO-Friendly</h2>
                    <p>Nobody wants their jargon with a side of bullshit. Nobody</p>
                </div>
                <div className={styles.gridItem}>
                <i id="uspIcon" class="fa-solid fa-bullseye"></i>
                    <h2>Compelling</h2>
                    <p>Nobody wants their jargon with a side of bullshit. Nobody</p>
                </div>
                <div className={styles.gridItem}>
                <i id="uspIcon" class="fa-solid fa-marker"></i>
                    <h2>Personable</h2>
                    <p>Every great brand has a personality that fits the market. I’ll match yours.</p>
                </div>
            </div>
        </div>
    )
}