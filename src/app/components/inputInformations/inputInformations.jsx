"use client";
import { useState } from "react";
import { Source_Sans_Pro } from "next/font/google";
import styles from "./inputInformations.module.css";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const InputInformations = ({
  inputNumber,
  inputName,
  inputExpirationDate,
  inputCvv,
  onChange,
  setCardFront,
}) => {
  return (
    <div className={styles.informationInputs}>
      <div className={styles.cardNumber}>
        <label for="numeroCartao" className={sourceSansPro.className}>
          Número do cartão
        </label>
        <input
          name="inputNumber"
          onChange={(e) => onChange(e)}
          value={inputNumber}
          className={styles.inputNumber}
          type="text"
          id="numeroCartao"
        />
      </div>
      <div className={styles.holderName}>
        <label for="nomeTitular" className={sourceSansPro.className}>
          Nome do titular
        </label>
        <input
          name="inputName"
          onChange={(e) => onChange(e)}
          value={inputName}
          className={styles.inputName}
          type="text"
          id="nomeTitular"
        />
      </div>
      <div className={styles.expirationCvv}>
        <div className={styles.expirationDate}>
          <label for="validade" className={sourceSansPro.className}>
            Validade
          </label>
          <input
            name="inputExpirationDate"
            value={inputExpirationDate}
            onChange={(e) => onChange(e)}
            className={styles.inputExpirationDate}
            type="text"
            id="validade"
          />
        </div>
        <div className={styles.cvv}>
          <label for="cvv" className={sourceSansPro.className}>
            CVV
          </label>
          <input
            name="inputCvv"
            value={inputCvv}
            onChange={(e) => onChange(e)}
            className={styles.inputCvv}
            type="text"
            id="cvv"
            onFocus={() => setCardFront(false)}
            onBlur={() => setCardFront(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default InputInformations;
