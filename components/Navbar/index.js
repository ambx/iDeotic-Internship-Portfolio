import Link from "next/link";
import styles from "./styles.module.scss";

export default function navbar(props) {
  return (
    <nav class={styles.container}> 
    <div className={styles.main}>
        <Link href="https://www.hibafathima.com/">
            <a className={styles.home}>Hiba Fathima</a>
        </Link> 
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </div>
    </nav>
  );
}