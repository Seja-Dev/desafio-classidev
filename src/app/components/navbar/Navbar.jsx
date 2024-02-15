import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./Navbar.module.css";
import Button from "/src/app/components/button/Button";

export default function Navbar({ showButton }) {
  return (
    <>
      <div className={styles.navWrapper}>
        <div>
          <span className={styles.navTitle}>ClassifiDev</span><br />
          <span className={styles.navSlogan}>O seu classificado online</span>
        </div>
        <span>{showButton && <Button />}</span>
      </div>
    </>
  );
}