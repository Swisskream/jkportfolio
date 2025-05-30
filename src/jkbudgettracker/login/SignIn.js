// // src/auth/SignIn.js
// import React, { useState } from 'react';
// import { Auth } from 'aws-amplify';

// export default function SignIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = async () => {
//     try {
//       const user = await Auth.signIn(email, password);
//       console.log('Sign-in successful:', user);
//     } catch (error) {
//       console.error('Error signing in:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign In</h2>
//       <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
//       <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
//       <button onClick={handleSignIn}>Sign In</button>
//     </div>
//   );
// }