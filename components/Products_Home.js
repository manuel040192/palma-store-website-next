import styles from '../styles.module.css';

export default function Products_Home() {
    return (
        <div className={styles.gallery}>
            <div classname={styles.pics}>
                <a href='/women'><img src='https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/cover-women.JPG?alt=media&token=ef5edd77-b8bb-46cc-b0ba-96f5ea58714c' className={styles.pic} /></a>
                <a href='/petsandowners'><img src='https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/cover-petsandowners.JPEG?alt=media&token=7e3b4c72-b34c-4718-8431-4412e5d845f2' className={styles.pic} /></a>
                <a href='/goods'><img src='https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/cover-goods.PNG?alt=media&token=01edd039-1bc0-4e1d-943c-72944086bc18' className={styles.pic} /></a>
            </div>
        </div>    
    )
}
