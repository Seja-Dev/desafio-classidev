"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./SearchBar.module.css";
import React, { useState } from 'react'; // Import React and useState hook


export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
};

// Handler for the keyUp event
const handleKeyUp = (e) => {
    // Trigger your filter update or search logic here
    console.log("Search Query:", searchQuery);
    // Optionally, you can also perform actions specifically for certain keys:
    // if (e.key === 'Enter') {
    //     console.log("User pressed Enter, execute search or filtering.");
    // }
};
    return (
      <>
      <div className={styles.searchBarWrapper}>
        <div className={styles.searchBarPropper}>
        <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyUp={handleKeyUp}
                placeholder="Faça uma busca"
                className={styles.searchBarInput}
            /> 
        <div className={styles.formBox}>
            <select
              id={"selectName"}
              name={"selectName"}
              required={"required"}
              className={styles.formItem}
            >
              <option className={styles.formItem} value="">Selecione a categoria</option>
              <option className={styles.formItem} value="option1">Automóveis</option>
              <option className={styles.formItem} value="option2">Eletrônicos</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
      </div>
      <br />
      </>
    );
  }