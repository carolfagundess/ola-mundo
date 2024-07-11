import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/eu.jpeg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá mundo!</h1>
        <p className={styles.paragrafo}>
          Sou Carolina, 19 anos, do Rio Grande do Sul. No terceiro semestre de
          Análise e Desenvolvimento de Sistemas e Analista de Ativação na
          Unifique. Foco em tecnologias Web-Frontend (HTML5, CSS3, Javascript) e
          Back-end (POO em Java).
        </p>
      </div>
      <div className={styles.imagens}>

        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="minha foto de perfil"
        />
      </div>
    </div>
  );
}
