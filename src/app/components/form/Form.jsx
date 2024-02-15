import Image from "next/image";
import styles from "./Form.module.css";
import Button from "/src/app/components/button/Button";
import Adbox from "/src/app/components/adbox/Adbox";
import Link from 'next/link';

export default function Form() {
  // Propriedades da form?
  const textAreaName = "Descrição";
  const textAreaLabel = "Descrição";
  const selectName = "dropdownFieldName";
  const selectLabel = "Selecione a Categoria";
  const name = "yourFieldName";
  const label = "Nome do Produto";
  const type = "text";
  const type_number = "number";
  const required = true;

  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <>
      <section className="homeWrapper">
        <Link href="/" passHref><span className={styles.rawlink}>Voltar para o ínicio</span></Link>
        <br/>
        <section className={styles.formWrapper}>
          <div className={styles.formBox}>
            <input
              type={type}
              id={name}
              name={name}
              required={required}
              className={styles.formItem}
              placeholder="Nome do Produto"
            />
          </div>
          <br/>
          {/* Categorias */}
          <div className={styles.formBox}>
            <select
              id={selectName}
              name={selectName}
              required={required}
              className={styles.formItem}
            >
              <option className={styles.formItem} value="">Selecione a categoria</option>
              <option className={styles.formItem} value="option1">Automóveis</option>
              <option className={styles.formItem} value="option2">Eletrônicos</option>
              {/* Outras categorias */}
            </select>
          </div>
          <br/>
          

          <div className={styles.formBox}>
            <input
              type={type_number}
              id={name}
              name={name}
              required={required}
              className={styles.formItem}
              placeholder="Preço"
            />
          </div>
          <br/>
          <div className={styles.formBox}>
            <input
              type={type_number}
              id={name}
              name={name}
              required={required}
              className={styles.formItem}
              placeholder="WhatsApp"
            />
          </div>
          <br/>
          {/* Descrição */}
          <div className={styles.formBox}>
            <textarea
              id={textAreaName}
              name={textAreaName}
              required={required}
              className={styles.formItem}
              placeholder="Descrição"
            />
          </div>
                    
          <br/>
          {/* Botão pra enviar? */}
          <Button className={styles.longButton} onClick={handleSubmit}></Button>
        </section>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </section>
    </>
  );
}
