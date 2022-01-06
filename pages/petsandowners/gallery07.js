import Header from '../../components/Navbar';
import styles from '../../styles.module.css';

function PetsAndOwners() {
    return (
        <div>
            <Header />
            <div className={styles.gallery_two}>
                <div classname={styles.pics}>
                    <img src='https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-blanco-rojo-verde-1.JPG?alt=media&token=ae1ade01-52fd-44a9-80ba-a68ff005a00f' className={styles.pic} />
                </div>
            </div>
        </div>
    )
}

export default PetsAndOwners