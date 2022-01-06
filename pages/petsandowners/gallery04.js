import Header from '../../components/Navbar';
import styles from '../../styles.module.css';

function PetsAndOwners() {
    return (
        <div>
            <Header />
            <div className={styles.gallery_two}>
                <div classname={styles.pics}>
                    <img src='https://firebasestorage.googleapis.com/v0/b/auth-development-b3b63.appspot.com/o/pets-azul-gris-rojo-1.JPEG?alt=media&token=7218e4cc-cad2-4560-bc7e-cf3552d731c8' className={styles.pic} />
                </div>
            </div>
        </div>
    )
}

export default PetsAndOwners