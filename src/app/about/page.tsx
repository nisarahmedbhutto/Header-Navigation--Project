import Header from "../../../components/header/header";
import styles from "./page.module.css";
export default function About() {
  return (
    <div>
      <Header />
      <article id={styles.para}>
        <h1 className={styles.heading}>About Us</h1>
        <p>
                  what i have written is:
                  <br />this project is
                  built on a header navigation
          pages and it navigates....
        </p>
      </article>
    </div>
  );
}
