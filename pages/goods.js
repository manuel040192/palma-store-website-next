import Header from '../components/Navbar';
import styles from '../styles.module.css';

export default function Products_Goods() {
    return (
        <div>
            <Header />
            <div className={styles.gallery_two}>
                <div classname={styles.pics}>
                    <a href='/goods/gallery01'><img src='https://imagizer.imageshack.com/img924/3168/dBmZr8.jpg' className={styles.pic} /></a>
                    <a href='/goods/gallery02'><img src='https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/medias-azul-1.jpg?alt=media&token=81dc1661-d6d1-46d0-87c7-6438d4300e4e' className={styles.pic} /></a>
                </div>
            </div>
        </div>    
    )
}