import Footer from "./Footer";
import HeaderF from "./Header";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.appContainer}>
      <HeaderF />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
