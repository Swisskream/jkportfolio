import styles from './Summary.module.css';

function Summary({ income, expense }) {
  const balance = income - expense;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3>Income</h3>
        <p className={styles.income}>${income.toFixed(2)}</p>
      </div>
      <div className={styles.card}>
        <h3>Expenses</h3>
        <p className={styles.expense}>${expense}</p>
      </div>
      <div className={styles.card}>
        <h3>Balance</h3>
        <p className={styles.balance}>${balance}</p>
      </div>
    </div>
  );
}

export default Summary;
