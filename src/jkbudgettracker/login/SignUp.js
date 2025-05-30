// import React, { useState } from 'react';
// import { Auth } from 'aws-amplify';

// export default function SignUp() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = async () => {
//     try {
//       const { user } = await Auth.signUp({
//         username: email,
//         password,
//         attributes: {
//           email, // required
//         },
//       });
//       console.log('Sign-up successful:', user);
//       alert('Check your email for a verification code');
//     } catch (error) {
//       console.error('Error signing up:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
//       <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
//       <button onClick={handleSignUp}>Sign Up</button>
//     </div>
//   );
// }
