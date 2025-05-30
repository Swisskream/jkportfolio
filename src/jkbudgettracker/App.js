import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsconfig from './login/aws-exports';

import Header from './components/Header';
import Summary from './components/Summary';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

import styles from './stylesheets/app.module.css';

Amplify.configure(awsconfig);

function App() {
  const [transactions, setTransactions] = useState([]);

  // ✅ Fetch data on component mount
  useEffect(() => {
    fetch('https://rv96je8k26.execute-api.us-west-1.amazonaws.com/Prod/budget')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        const clean = Array.isArray(data)
          ? data.filter(t => t && typeof t.amount === 'number')
          : [];
        setTransactions(clean);
      })
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  // ✅ Add new transaction via backend
  const handleAdd = (tx) => {
    fetch('https://rv96je8k26.execute-api.us-west-1.amazonaws.com/Prod/budget', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tx),
    })
      .then(response => response.json())
      .then(data => {
        console.log('POST response:', data);
        setTransactions(prev => [data.item, ...prev]);
      })
      .catch(error => console.error('Error adding transaction:', error));
  };

  const income = transactions
    .filter((t) => t && typeof t.amount === 'number' && t.amount >= 0)
    .reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions
    .filter((t) => t && typeof t.amount === 'number' && t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  // return (
  //   <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
  //     <Header />
  //     <Summary income={income} expense={expense} />
  //     <TransactionForm onAdd={handleAdd} />
  //     <TransactionList transactions={transactions} />
  //   </div>
  // );

   return (
    <Authenticator className={styles.authenticator}
      signUpAttributes={['email']}
      initialState='signUp'>
      {({ signOut, user }) => (
        <div className={styles.homepage}>
          <button className={styles.signOut} onClick={signOut} >Sign out</button>
          <Header />
          <Summary income={income} expense={expense} />
          <TransactionForm onAdd={handleAdd} />
          <TransactionList transactions={transactions} />
        </div>
      )}
    </Authenticator>
  );
}

export default App;

//Terraform

// import React, { useState, useEffect } from 'react';
// import { Amplify } from 'aws-amplify';
// import { fetchAuthSession  } from '@aws-amplify/auth';
// import { Authenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';

// import awsconfig from './login/aws-exports';

// import Header from './components/Header';
// import Summary from './components/Summary';
// import TransactionForm from './components/TransactionForm';
// import TransactionList from './components/TransactionList';

// import styles from './stylesheets/app.module.css';

// Amplify.configure(awsconfig);

// const API_URL = 'https://l1uae3hhuj.execute-api.us-west-1.amazonaws.com/ProtectedAPI/budget';

// function App() {
//   const [transactions, setTransactions] = useState([]);

//   const fetchTransactions = async () => {
//     try {
//       const session = await fetchAuthSession();
//       const token = session.tokens?.idToken?.toString();

//       if (!token) {
//         throw new Error('No ID token found in session');
//       }

//       const response = await fetch(API_URL, {
//         method: 'GET',
//         headers: {
//           Authorization: token,
//         },
//       });

//       if (!response.ok) throw new Error('Network response was not ok');

//       const data = await response.json();
//       const clean = Array.isArray(data)
//         ? data.filter(t => t && typeof t.amount === 'number')
//         : [];
//       setTransactions(clean);
//     } catch (error) {
//       console.error('Error fetching transactions:', error);
//     }
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const handleAdd = async (tx) => {
//     try {
//       const session = await fetchAuthSession();
//       const token = session.tokens?.idToken?.toString();

//       const response = await fetch(API_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: token,
//         },
//         body: JSON.stringify(tx),
//       });

//       const data = await response.json();
//       console.log('POST response:', data);

//       if (data && data.item) {
//         setTransactions(prev => [data.item, ...prev]);
//       } else {
//         fetchTransactions();
//       }
//     } catch (error) {
//       console.error('Error adding transaction:', error);
//     }
//   };

//   const income = transactions
//     .filter(t => t && typeof t.amount === 'number' && t.amount >= 0)
//     .reduce((sum, t) => sum + t.amount, 0);

//   const expense = transactions
//     .filter(t => t && typeof t.amount === 'number' && t.amount < 0)
//     .reduce((sum, t) => sum + Math.abs(t.amount), 0);

//   return (
//     <Authenticator className={styles.authenticator} signUpAttributes={['email']} initialState="signUp">
//       {({ signOut }) => (
//         <div className={styles.homepage}>
//           <button className={styles.signOut} onClick={signOut}>Sign out</button>
//           <Header />
//           <Summary income={income} expense={expense} />
//           <TransactionForm onAdd={handleAdd} />
//           <TransactionList transactions={transactions} />
//         </div>
//       )}
//     </Authenticator>
//   );
// }

// export default App;

