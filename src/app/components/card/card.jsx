import { Source_Sans_Pro } from "next/font/google";
import Image from "next/image";
import styles from "./card.module.css";
import visa from "../../../../public/visa.svg";
import mastercard from "../../../../public/mastercard.svg";
import elo from "../../../../public/elo.svg";
import contactless from "../../../../public/contactless.svg";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Card = ({ inputNumber, inputName, inputExpirationDate, cardFlag }) => {
  return (
    <div className={styles.card}>
      <div className={styles.headerCard}>
        {cardFlag == "visa" ? (
          <Image className={styles.visa} src={visa} width={32} height={32} />
        ) : cardFlag == "mastercard" ? (
          <Image
            className={styles.mastercard}
            src={mastercard}
            width={32}
            height={32}
          />
        ) : (
          <Image className={styles.elo} src={elo} width={32} height={32} />
        )}

        <Image src={contactless} width={24} height={24} />
      </div>
      <p
        id="automaticNumberCard"
        className={`${styles.automaticNumberCard} ${sourceSansPro.className}`}
      >
        {inputNumber}
      </p>
      <div className={styles.footerCard}>
        <p className={`${styles.automaticName} ${sourceSansPro.className}`}>
          {inputName}
        </p>
        <p
          className={`${styles.automaticExpiration} ${sourceSansPro.className}`}
        >
          {inputExpirationDate}
        </p>
      </div>
    </div>
  );
};

export default Card;
