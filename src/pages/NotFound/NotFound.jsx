import React from "react";
import { FaSadTear } from "react-icons/fa";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <FaSadTear className={styles.icon} />
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Page not found</p>
      <p className={styles.description}>
        The page you are looking for doesn’t exist or an error occurred. <br />
        Go back, or head over to the home page to choose a new direction.
      </p>
    </div>
  );
}
