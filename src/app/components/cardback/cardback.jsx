import { Source_Sans_Pro } from "next/font/google";
import styles from "./cardback.module.css";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Cardback = ({ inputCvv }) => {
  return (
    <div className={styles.cardback}>
      <div className={styles.magneticBand}></div>
      <div className={styles.cvvAutomatic}>
        <p className={styles.cvvBackCode}>***</p>
        <p className={`${sourceSansPro.className} ${styles.cvvBackWrite}`}>
          {inputCvv}
        </p>
      </div>
    </div>
  );
};

export default Cardback;
