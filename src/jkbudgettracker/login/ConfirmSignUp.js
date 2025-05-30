import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

export default function ConfirmSignUp() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const handleConfirm = async () => {
    try {
      await Auth.confirmSignUp(email, code);
      console.log('Confirmation successful');
      alert('You can now log in');
    } catch (error) {
      console.error('Error confirming sign-up:', error);
    }
  };

  return (
    <div>
      <h2>Confirm Sign Up</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Verification Code" value={code} onChange={e => setCode(e.target.value)} />
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
}
