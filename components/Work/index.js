import Link from 'next/link'
import styles from "./styles.module.scss"
import DetailCard from '../Details-Card'

export default function Work(){
    return(
        <div className={styles.container}>
            <br />
            <h1 className={styles.title}>What I do</h1>
            <hr className={styles.titleUnderline} />
            <div className={styles.box}>
                <div>
                I create content marketing strategies for B2B companies that know the importance of an education-first approach to acquiring and retaining customers. My inbound-first focus ensures that companies reach their target audience on the right channel, with the right message and at the right time.
                </div>
                <div className={styles.gridContainer}>
                    <DetailCard title="Content Marketing" quote="Words, but not wordy. I’ll help you create a content marketing strategy to capture attention, educate your target market and fuel your business growth organically." />
                    <DetailCard title="Content and Copy Writing" quote="Words, but not wordy. I’ll help you create a content marketing strategy to capture attention, educate your target market and fuel your business growth organically." />
                    <DetailCard title="Technical Writing" quote="Words, but not wordy. I’ll help you create a content marketing strategy to capture attention, educate your target market and fuel your business growth organically." />               
                </div>
                </div></div>
    )
}