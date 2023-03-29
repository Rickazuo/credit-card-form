import { Source_Sans_Pro } from "next/font/google";
import Image from "next/image";
import styles from "./page.module.css";
import visa from "../../public/visa.svg";
import mastercard from "../../public/mastercard.svg";
import elo from "../../public/elo.svg";
import contactless from "../../public/contactless.svg";
import shield from "../../public/shield.svg"

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

            <div className={styles.card}>
              <div className={styles.headerCard}>
                <Image src={visa} width={32} height={32} />
                <Image src={contactless} width={24} height={24} />
              </div>
              <p className={`${styles.automaticNumberCard} ${sourceSansPro.className}`}>4716 8039 02** ****</p>
              <div className={styles.footerCard}>
                <p className={`${styles.automaticName} ${sourceSansPro.className}`}>Seu nome aqui</p>
                <p className={`${styles.automaticExpiration} ${sourceSansPro.className}`}>**/**</p>
              </div>
            </div>
            <div className={styles.securityShield}>
              <Image src={shield} width={20} height={20} />
              <p className={sourceSansPro.className} >Seus dados estão seguros</p>
            </div>
          </div>

        </div>
        <button className={styles.addButton} type="submit">Adicionar cartão</button>
      </div>
    </main>
  );
}
