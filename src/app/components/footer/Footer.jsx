import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
      <>
      <footer className={styles.footerWrapper}>
        <div className={styles.footerTitle}>Criado por Leonardo Nunesmaia - Desafio SejaDev</div>
      </footer>
      </>
    );
  }