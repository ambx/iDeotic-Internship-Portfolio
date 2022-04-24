import Link from 'next/link'
import styles from "./styles.module.scss"
import DetailCard from '../Details-Card'

export default function Testimonials(){
    return(
        <div className={styles.container}>
            <br />
            <h1 className={styles.title}>What those I work with think</h1>
            <hr className={styles.titleUnderline} />
            <div className={styles.box}>
                <div>
                B2B buyers consume an average of 13 pieces of content before making a purchase decision. So I worked with these teams to build a B2B content marketing strategy that evolves with their target market needs, with a focus on organic growth.
                </div>
                <br />
                <div className={styles.gridContainer}>
                    <DetailCard quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel turpis nunc eget lorem dolor. Massa ultricies mi quis hendrerit dolor magna eget est. Semper auctor neque vitae tempus quam. Eu facilisis sed odio morbi quis commodo odio." title="Contensify" name="Vanhishikha ," designation="Founder" />
                    <DetailCard quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel turpis nunc eget lorem dolor. Massa ultricies mi quis hendrerit dolor magna eget est. Semper auctor neque vitae tempus quam. Eu facilisis sed odio morbi quis commodo odio." title="Contensify" name="Vanhishikha ," designation="Founder" />
                    <DetailCard quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel turpis nunc eget lorem dolor. Massa ultricies mi quis hendrerit dolor magna eget est. Semper auctor neque vitae tempus quam. Eu facilisis sed odio morbi quis commodo odio." title="Contensify" name="Vanhishikha ," designation="Founder" />
                    <DetailCard quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel turpis nunc eget lorem dolor. Massa ultricies mi quis hendrerit dolor magna eget est. Semper auctor neque vitae tempus quam. Eu facilisis sed odio morbi quis commodo odio." title="Contensify" name="Vanhishikha ," designation="Founder" />
                </div>
            </div>
        </div>
    )
}