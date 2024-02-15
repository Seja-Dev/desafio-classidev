import Image from "next/image";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
import Adbox from "../components/adbox/Adbox";
import Navbar from "../components/navbar/Navbar";
import Vitrine from "../components/vitrine/Vitrine";
import Form from "../components/form/Form";
import { Inter } from "next/font/google";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });
const homepagebutton = false;

export default function One() {
    return (
      <>
        <Navbar />
        
        <Form />
        
        <Footer />
      </>
    );
  }