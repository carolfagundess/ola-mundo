import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/eu.jpeg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>
        <p className={styles.paragrafo}>
          Meu nome é Carolina, tenho 19 anos e sou do Rio Grande do Sul. Estou
          no terceiro semestre de Análise e Desenvolvimento de Sistemas no
          Instituto Federal Sul-rio-grandense e trabalho como Analista de
          Ativação na Unifique, configurando roteadores e RBs para clientes
          corporativos. Tenho foco em tecnologias Web-Frontend (HTML5, CSS3,
          Javascript) e estou aprimorando minhas habilidades em Back-end,
          especialmente em Programação Orientada a Objetos com Java.
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
