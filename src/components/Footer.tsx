import styles from "./Footer.module.scss";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p>Made with <span>&#9829;</span> by Max van Essen</p>
      </div>
    </footer>
  )
}
