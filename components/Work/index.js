import Link from 'next/link'
import styles from "./styles.module.scss"

export default function Work(){
    return(
        <div className={styles.container}>
            <br />
            <h1 className={styles.title}>What I do</h1>
            <div className={styles.box}>
                <div>
                I create content marketing strategies for B2B companies that know the importance of an education-first approach to acquiring and retaining customers. My inbound-first focus ensures that companies reach their target audience on the right channel, with the right message and at the right time.
                </div>
                <div className={styles.gridContainer}>
                    <div className={styles.gridItem}>
                        <h3>Content Marketing</h3>
                        <p>Words, but not wordy. I’ll help you create a content marketing strategy to capture attention, educate your target market and fuel your business growth organically.</p>
                    </div>
                    <div className={styles.gridItem}>
                        <h3>Copy and Content Writing</h3>
                        <p>Got ideas but not enough time to turn them into words? I’ll help you create ebooks, articles, video scripts, infographics, ad copies, whitepapers, research papers and more consistently.</p>
                    </div>
                    <div className={styles.gridItem}>
                        <h3>Technical Writing</h3>
                        <p>Getting to the forefront needs a push and a strategy to ensure you don’t end up bankrupt. I’ll help you plan your content advertising campaigns to max out your ROI! </p>
                    </div>
                </div>
                </div></div>
    )
}