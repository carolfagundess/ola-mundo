import styles from "./Inicio.module.css";
import posts from "json/post.json";
import PostCard from "componentes/PostCard";

export default function Inicio() {
  return (
    <main>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}
