import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Navbar /> 
      <h1>Homepage</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto consequatur quod vel iste at fugiat minima commodi perferendis, doloremque earum, dicta vitae, neque porro temporibus culpa. Consequuntur exercitationem aperiam sapiente!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto consequatur quod vel iste at fugiat minima commodi perferendis, doloremque earum, dicta vitae, neque porro temporibus culpa. Consequuntur exercitationem aperiam sapiente!</p>
        <Link href="/ninjas">
          <a>See Ninja Listing</a>
        </Link>
        <Footer />
    </div>
  )
}
