import Image from "next/image";
import styles from "./page.module.css";
import Adbox from "./components/adbox/Adbox"
import Vitrine from "./components/vitrine/Vitrine"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import SearchBar from "./components/searchbar/SearchBar"

const homepagebutton = true;

export default function Home() {
  return (
    <>
    <Navbar showButton={homepagebutton} />
    <section className="homeWrapper">
    <SearchBar />
    <Vitrine />
    </section>
    <Footer />

    </>
  );
}
