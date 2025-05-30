import styles from './TransactionList.module.css';

function TransactionList({ transactions }) {
  return (
    <ul className={styles.list}>
      {transactions
        .filter(tx => tx && typeof tx.amount === 'number' && typeof tx.description === 'string')
        .map((tx) => (
          <li key={tx.id} className={tx.amount >= 0 ? styles.income : styles.expense}>
            <span>{tx.description}</span>
            <span>{tx.amount >= 0 ? '+' : '-'}${Math.abs(tx.amount)}</span>
            <span>{new Date(tx.date).toLocaleDateString()}</span>
          </li>
      ))}
    </ul>
  );
}

export default TransactionList;
