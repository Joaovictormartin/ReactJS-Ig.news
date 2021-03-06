import { useState } from "react";

import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {

  function handleSubscribe() {

  }

  return (
    <button 
      type="button"
      onClick={handleSubscribe}
      className={styles.buttonSubscribe}
    >
      Subscribe now
    </button>
  );
}
