import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto consequatur quod vel iste at fugiat minima commodi perferendis, doloremque earum, dicta vitae, neque porro temporibus culpa. Consequuntur exercitationem aperiam sapiente!</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto consequatur quod vel iste at fugiat minima commodi perferendis, doloremque earum, dicta vitae, neque porro temporibus culpa. Consequuntur exercitationem aperiam sapiente!</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
    </div>
  )
}
