import { Children } from "react";
import styles from "./PostModelo.module.css";

export default function PostModelo({ fotoCapa, titulo, children }) {
  return (
    <article className={styles.postModeloContainer}>
      <div
        className={styles.fotoCapa}
        style={{ background: `url(${fotoCapa})` }}
      ></div>
      <h2 class={styles.titulo}>{titulo}</h2>
      <div className={styles.postConteudoContainer}>{children}</div>
    </article>
  );
}
