import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Budget Tracker</h1>
      <p>Track your income and expenses</p>
    </header>
  );
}

export default Header;
