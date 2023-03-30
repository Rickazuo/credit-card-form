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

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.headerCard}>
        <Image className={styles.visa} src={visa} width={32} height={32} />
        <Image
          className={styles.mastercard}
          src={mastercard}
          width={32}
          height={32}
        />
        <Image className={styles.elo} src={elo} width={32} height={32} />
        <Image src={contactless} width={24} height={24} />
      </div>
      <p className={`${styles.automaticNumberCard} ${sourceSansPro.className}`}>
        4716 8039 02** ****
      </p>
      <div className={styles.footerCard}>
        <p className={`${styles.automaticName} ${sourceSansPro.className}`}>
          Seu nome aqui
        </p>
        <p
          className={`${styles.automaticExpiration} ${sourceSansPro.className}`}
        >
          **/**
        </p>
      </div>
    </div>
  );
};

export default Card;
