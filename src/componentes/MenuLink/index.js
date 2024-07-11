import { Link, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({ children, to }) {
  //localizando a rota da url
  const localizacao = useLocation();

  return (
    <Link
      className={`
    ${styles.link}
    ${localizacao.pathname === to ? styles.sublinhado : " "}
   `}
      to={to}
    >
      {children}
    </Link>
  );
}
