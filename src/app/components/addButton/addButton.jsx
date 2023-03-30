import { Source_Sans_Pro } from "next/font/google";
import styles from "./addButton.module.css";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const AddButton = () => {
  return (
    <>
      <button
        className={`${styles.addButton} ${sourceSansPro.className}`}
        type="submit"
      >
        Adicionar cartão
      </button>
    </>
  );
};

export default AddButton;
