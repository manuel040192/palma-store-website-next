import Header from '../../components/Navbar';
import styles from '../../styles.module.css';

function Women() {
    return (
        <div>
            <Header />
            <div className={styles.gallery_two}>
                <div classname={styles.pics}>
                    <img src='https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/cover-women.JPG?alt=media&token=ef5edd77-b8bb-46cc-b0ba-96f5ea58714c' className={styles.pic} />
                </div>
            </div>
        </div>
    )
}

export default Women