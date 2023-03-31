"use client";
import { useState } from "react";
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
  const [inputNumber, setInputNumber] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputExpirationDate, setInputExpirationDate] = useState("");
  const [inputCvv, setInputCvv] = useState("");
  const [cardFront, setCardFront] = useState(true);
  const [cardFlag, setCardFlag] = useState("visa");

  function getCardFlag(twoDigits) {
    switch (true) {
    case twoDigits <= 33:
      return "visa";
    case twoDigits > 33 && twoDigits <= 66:
      return "mastercard";
    case twoDigits > 66 && twoDigits <= 99:
      return "elo";
    }
  }

  function onChange(e) {
    const { name, value } = e.target;
    if (name == "inputNumber") {
      if (inputNumber.length >= 2)
        setCardFlag(
          getCardFlag(parseInt(`${inputNumber[0]}${inputNumber[1]}`))
        );
      setInputNumber(value);
    } else if (name == "inputName") setInputName(value);
    else if (name == "inputExpirationDate") setInputExpirationDate(value);
    else if (name == "inputCvv") setInputCvv(value);
  }

  return (
    <main className={`${styles.main} ${sourceSansPro.className}`}>
      <div className={styles.container}>
        <div className={styles.cardInformation}>
          <InputInformations
            inputNumber={inputNumber}
            inputName={inputName}
            inputExpirationDate={inputExpirationDate}
            inputCvv={inputCvv}
            onChange={onChange}
            setCardFront={setCardFront}
          />
          <div className={styles.rightSide}>
            {cardFront ? (
              <Card
                inputNumber={inputNumber}
                inputName={inputName}
                inputExpirationDate={inputExpirationDate}
                cardFlag={cardFlag}
              />
            ) : (
              <Cardback inputCvv={inputCvv} />
            )}

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
