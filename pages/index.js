import Header from '../components/Navbar';
import Banner from '../components/Banner';
import Products_Home from '../components/Products_Home';
import styles from '../styles.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <Products_Home />
    </div>
  )
}
