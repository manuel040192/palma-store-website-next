import Header from '../components/Navbar';
import styles from '../styles.module.css';

export default function Products_Women() {
    return (
        <div>
            <Header />
            <div className={styles.gallery_two}>
                <div classname={styles.pics}>
                    <a href='/women/gallery01'><img src='https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/cover-women.JPG?alt=media&token=ef5edd77-b8bb-46cc-b0ba-96f5ea58714c' className={styles.pic} /></a>
                    <a href='/women/gallery02'><img src='https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/chaqueta-mangas-cuadros-1.JPEG?alt=media&token=a6c62ec5-e7aa-4bb0-99a9-eb2d0d0729e7' className={styles.pic} /></a>
                </div>
            </div>
        </div>    
    )
}
