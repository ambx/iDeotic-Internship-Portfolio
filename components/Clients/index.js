import Link from 'next/link'
import styles from "./styles.module.scss"
import Image from 'next/image'
import Contensify from '../../public/images/clients/contensify.png'
import XgenTech from '../../public/images/clients/xgentech.png'
import Dresma from '../../public/images/clients/dresma.png'


export default function Clients() {
    return (
        <div className={styles.container}>
            <br />
            <h1 className={styles.title}>Who I work with</h1>
            <hr className={styles.titleUnderline} />
            <div className={styles.box}>
                <div>
                    B2B buyers consume an average of 13 pieces of content before making a purchase decision. So I worked with these teams to build a B2B content marketing strategy that evolves with their target market needs, with a focus on organic growth.
                </div>
                <br /><br />
                <div className={styles.gridContainer}>
                    <div className={styles.gridItem}>
                        <Image className={styles.headshot}
                            src={XgenTech}
                            height="120px"
                            width="120px"
                            alt="Picture of the author" />
                    </div>
                    <div className={styles.gridItem}>
                        <Image className={styles.headshot}
                            src={Dresma}
                            height="120px"
                            width="120px"
                            alt="Picture of the author" />
                    </div>
                    <div className={styles.gridItem}>
                        <Image className={styles.headshot}
                            src={Contensify}
                            height="120px"
                            width="120px"
                            alt="Picture of the author"/>
                    </div>
                    <div className={styles.gridItem}>
                        <Image className={styles.headshot}
                            src={XgenTech}
                            height="120px"
                            width="120px"
                            alt="Picture of the author" />
                    </div>
                    <div className={styles.gridItem}>
                        <Image className={styles.headshot}
                            src={Dresma}
                            height="120px"
                            width="120px"
                            alt="Picture of the author" />
                    </div>
                    <div className={styles.gridItem}>
                        <Image className={styles.headshot}
                            src={Contensify}
                            height="120px"
                            width="120px"
                            alt="Picture of the author"/>
                    </div>
                </div>

            </div>

        </div>
    )
}