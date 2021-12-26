import Header from '../components/Navbar';
import Banner from '../components/Banner';
import ProductTypeCovers from '../components/ProductTypeCovers';
import styles from '../styles.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <ProductTypeCovers />
    </div>
  )
}
