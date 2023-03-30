import { Source_Sans_Pro } from "next/font/google";
import Image from "next/image";
import styles from "./page.module.css";
import shield from "../../public/shield.svg";

import Card from "./components/card/card";
import Cardback from "./components/cardback/cardback";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Home() {
  return (
    <main className={`${styles.main} ${sourceSansPro.className}`}>
      <div className={styles.container}>
        <div className={styles.cardInformation}>
          <div className={styles.informationInputs}>
            <div className={styles.cardNumber}>
              <label for="numeroCartao">Número do cartão</label>
              <input type="text" id="numeroCartao"></input>
            </div>
            <div className={styles.holderName}>
              <label for="nomeTitular">Nome do titular</label>
              <input type="text" id="nomeTitular"></input>
            </div>
            <div className={styles.expirationCvv}>
              <div className={styles.expirationDate}>
                <label for="validade">Validade</label>
                <input type="text" id="validade"></input>
              </div>
              <div className={styles.cvv}>
                <label for="cvv">CVV</label>
                <input type="text" id="cvv"></input>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <Card />
            <Cardback />
            <div className={styles.securityShield}>
              <Image src={shield} width={20} height={20} />
              <p className={sourceSansPro.className}>
                Seus dados estão seguros
              </p>
            </div>
          </div>
        </div>
        <button className={styles.addButton} type="submit">
          Adicionar cartão
        </button>
      </div>
    </main>
  );
}
