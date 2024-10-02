import Header from "../../../components/header/header";
import styles from "./page.module.css"
export default function Courses() {
  return (
    <div>
      <Header />
      <article className={styles.courses}>
        <h1 className={styles.heading}>Courses</h1>
        <ul className={styles.languages}>
          <li>Typescript</li>
          <li>Python</li>
          <li>PHP</li>
          <li>Java</li>
        </ul>
      </article>
    </div>
  );
}
