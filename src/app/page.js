import { Source_Sans_Pro } from "next/font/google";
import Image from "next/image";
import styles from "./page.module.css";
import shield from "../../public/shield.svg";

import Card from "./components/card/card";
import Cardback from "./components/cardback/cardback";
import InputInformations from "./components/inputInformations/inputInformations";
import AddButton from "./components/addButton/addButton";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
});


export default function Home() {
  return (
    <main className={`${styles.main} ${sourceSansPro.className}`}>
      <div className={styles.container}>
        <div className={styles.cardInformation}>
          <InputInformations />
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
        <AddButton />
      </div>
    </main>
  );
}
