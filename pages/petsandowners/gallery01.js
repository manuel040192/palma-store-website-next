import Header from '../../components/Navbar';
import styles from '../../styles.module.css';

function PetsAndOwners() {
    return (
        <div>
            <Header />
            <div className={styles.gallery_two}>
                <div classname={styles.pics}>
                    <img src='https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/cover-petsandowners.JPEG?alt=media&token=7e3b4c72-b34c-4718-8431-4412e5d845f2' className={styles.pic} />
                </div>
            </div>
        </div>
    )
}

export default PetsAndOwners