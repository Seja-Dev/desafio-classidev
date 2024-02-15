import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./Form.module.css";
import Button from "/src/components/button/Button";
import Adbox from "/src/components/adbox/Adbox";

export default function Form() {
    return (
      <>
      <section className={styles.formWrapper}>
      Crie Seu Anúncio

      </section>
      </>
    );
  }