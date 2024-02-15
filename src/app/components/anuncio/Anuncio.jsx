import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./Form.module.css";
import Button from "/src/app/components/button/Button";
import Adbox from "/src/app/components/adbox/Adbox";

export default function Anuncio() {
    return (
      <>
      <section className={styles.formWrapper}>
      Veja seu anúncio

      </section>
      </>
    );
  }