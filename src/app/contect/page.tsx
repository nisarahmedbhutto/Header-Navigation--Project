import Header from "../../../components/header/header";
import styles from "./page.module.css"
export default function Contect() {
  return (
    <div>
      <Header />
      <article className={styles.contect}>
        <h1 className={styles.heading}>Contect Us</h1>
        <ul >
          <li>Contect : 03492029262</li>
          <li>Email : bhuttonisar@gmail.com</li>
          <li>Address : karachi landhi malir</li>
        </ul>
      </article>
    </div>
  );
}
