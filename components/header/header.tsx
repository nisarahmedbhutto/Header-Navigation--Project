import Link from "next/link"
import styles from "./header.module.css"


export default function Header() {
    return (
        <header className={styles.header}>
            <ul className={styles.manu}>
                <Link href={"/"}>
                    <li>Home</li>
                </Link>
                <Link href={"/about"}>
                    <li>About Us</li>
                </Link>
                <Link href={"/contect"}>
                    <li>Contect Us</li>
                </Link>
                <Link href={"/courses"}>
                    <li>Courses</li>
                </Link>
            </ul>
            <ul className={styles.social}>
                <Link href={"https://www.google.com"}><li>Google</li></Link>
                <Link href={"https://www.youtube.com"}><li>YouTube</li></Link>
                <Link href={"https://www.twitter.com"}><li>Twitter</li></Link>
            </ul>
        </header>
    )
}