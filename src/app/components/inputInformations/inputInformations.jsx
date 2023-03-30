import { Source_Sans_Pro } from "next/font/google";
import styles from "./inputInformations.module.css";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const InputInformations = () => {
  return (
    <div className={styles.informationInputs}>
      <div className={styles.cardNumber}>
        <label for="numeroCartao" className={sourceSansPro.className}>
          Número do cartão
        </label>
        <input type="text" id="numeroCartao"></input>
      </div>
      <div className={styles.holderName}>
        <label for="nomeTitular" className={sourceSansPro.className}>
          Nome do titular
        </label>
        <input type="text" id="nomeTitular"></input>
      </div>
      <div className={styles.expirationCvv}>
        <div className={styles.expirationDate}>
          <label for="validade" className={sourceSansPro.className}>
            Validade
          </label>
          <input type="text" id="validade"></input>
        </div>
        <div className={styles.cvv}>
          <label for="cvv" className={sourceSansPro.className}>
            CVV
          </label>
          <input type="text" id="cvv"></input>
        </div>
      </div>
    </div>
  );
};

export default InputInformations;
