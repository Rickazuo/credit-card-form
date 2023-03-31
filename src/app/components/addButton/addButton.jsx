import { Source_Sans_Pro } from "next/font/google";
import styles from "./addButton.module.css";
import Image from "next/image";
import load from "../../../../public/load.svg";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const AddButton = ({ avaliableButton, setAddCard, addCard }) => {
  return (
    <>
      <button
        className={`${styles.addButton} ${sourceSansPro.className}`}
        onClick={() => setAddCard((click) => !click)}
        type="submit"
        id="submitButton"
        disabled={!avaliableButton}
      >
        {addCard ? (
          <Image
            className={styles.imgLoading}
            src={load}
            width={32}
            height={32}
          />
        ) : (
          <p className={styles.pButton}>Adicionar cartão</p>
        )}
      </button>
    </>
  );
};

export default AddButton;
