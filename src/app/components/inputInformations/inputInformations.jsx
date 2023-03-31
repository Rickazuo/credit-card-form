"use client";
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
          maxLength="25"
          pattern="[0-9]*"
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^\d]/g, "").slice(0, 16);
            const numbers = e.target.value.match(/\d{1,4}/g);
            const formattedValue = numbers && numbers.join(" - ");
            e.target.value = formattedValue || "";
          }}
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
          maxLength="28"
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
            maxLength="5"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^\d]/g, "").slice(0, 4);
              const month = e.target.value.slice(0, 2);
              const year = e.target.value.slice(2, 4);
              if (month.length === 2 && !e.target.value.endsWith("/")) {
                e.target.value = `${month}/${year}`;
              }
            }}
            placeholder="MM/YY"
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
            type="number"
            id="cvv"
            maxLength="3"
            onFocus={() => setCardFront(false)}
            onBlur={() => setCardFront(true)}
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 3);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InputInformations;
