import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./Vitrine.module.css";
import Button from "/src/app/components/button/Button";
import Adbox from "/src/app/components/adbox/Adbox";

export default function Vitrine() {
    return (
      <>
      <section className={styles.vitrineWrapper}>
      <Adbox />
      <Adbox />
      <Adbox />
      <Adbox />
      <Adbox />
      <Adbox />
      <Adbox />
      <Adbox />
      <Adbox />
      </section>
      </>
    );
  }