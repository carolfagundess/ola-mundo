import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/foto-de-perfil.jpg";

import styles from "./SobreMim.module.css";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou Carol</h3>
      <img
        src={fotoSobreMim}
        alt="foto de Carolina"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Olá! Eu sou Carolina, uma jovem de 19 anos do Rio Grande do Sul,
        apaixonada por tecnologia. Após concluir o ensino médio, decidi seguir
        essa paixão como carreira. Atualmente, estou no terceiro semestre do
        curso de Análise e Desenvolvimento de Sistemas no Instituto Federal de
        Educação, Ciência e Tecnologia Sul-rio-grandense.
      </p>
      <p className={styles.paragrafo}>
        Trabalho como Analista de Ativação na Unifique, uma empresa de
        tecnologia, onde sou responsável por configurar roteadores e RBs para
        clientes corporativos. Estou focada em aprimorar minhas habilidades em
        tecnologias Web-Frontend, incluindo HTML5, CSS3 e JavaScript.
      </p>
      <p className={styles.paragrafo}>
        Na faculdade, estou me dedicando ao Back-end, aprendendo os fundamentos
        de Programação Orientada a Objetos (POO) em Java e desenvolvendo
        projetos que exploram conceitos como herança, polimorfismo, interfaces e
        classes abstratas. Para complementar minha formação, concluí vários
        cursos e obtive diversos certificados relevantes. Entre eles, destaco o
        curso de Estrutura e Funcionamento das Redes de Computadores pela
        Coursera e Google, que me deu uma base sólida em redes. Também finalizei
        a Formação - Front End T6 pela ONE Alura, que aprimorou minhas
        habilidades em desenvolvimento frontend.
      </p>
      <p className={styles.paragrafo}>
        Além disso, me especializei em Programação Orientada a Objetos com Java
        pela Digital Innovation One, aprofundando meu conhecimento na linguagem
        Java. Outros cursos que concluí incluem os Fundamentos do Suporte
        Técnico, também pela Coursera e Google, e o curso de Inglês 1 no
        Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do
        Sul, que melhorou minhas habilidades de comunicação em inglês,
        essenciais para a área de tecnologia.
      </p>
    </PostModelo>
  );
}
