import Link from "next/link";
import styles from "./styles.module.scss";

export default function navbar(props) {
  return (
    <nav class={styles.flexbox}> 
        <Link href="https://www.hibafathima.com/">
            <a className={styles.active}>Hiba Fathima</a>
        </Link> 
        <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  );
}