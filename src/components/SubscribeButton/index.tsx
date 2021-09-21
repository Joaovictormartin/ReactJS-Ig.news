import { useState } from "react";

import styles from "./styles.module.scss";

export function SubscribeButton() {
  return (
    <button type="button" className={styles.buttonSubscribe}>
      Subscribe now
    </button>
  );
}
