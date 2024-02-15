import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./Adbox.module.css";

export default function Adbox() {
    return (
      <>
      <div className={styles.adboxPropper}>
        <span className={styles.adboxTitle}>Carrão 2.0</span>
        <span className={styles.adboxDate}>Postado em 22/02/2024</span>
        <span className={styles.adboxPrice}>R$65.000</span>
        <span className={styles.adboxDescription}>Um carrão muito bom viu. Um Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt at corporis est vel laborum ad optio numquam inventore, iusto harum sed debitis perspiciatis, rerum alias illum illo quia, perferendis magni? De muita qualidade.</span>
        <span className={styles.adboxCategory}>Automóveis</span>
      </div>
      </>
    );
  }