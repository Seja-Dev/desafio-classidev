import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./Button.module.css";
import Link from 'next/link';

export default function Button() {
    return (
      <>
      <Link href="/adcreate" passHref>
      <button className={styles.buttonPropper}>
        <span className={styles.buttonTitle}>Criar anúncio</span></button>
      </Link>
      
      </>
    );
  }