import React, { useState } from 'react';
import { supabase } from '../createClient';


function Login({ onToggle }) {
  const [signinUsername, setsigninUsername] = useState('');
  const [signinPassword, setSigninPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data:data, error } = await supabase
      .from('Users')
      .select('*')
      .eq('Username', signinUsername)
      .eq('Password', signinPassword)
      .single();

    if (error || !data) {
      console.error('Login failed:', error);
      alert('Login Failed: ' + (error ? error.message : 'Invalid credentials'));
    } else {
      console.log('Logged in user:', data);
      alert('Login Successful!');
      setsigninUsername('');
      setSigninPassword('');
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <div>
        <label className="block text-gray-700">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={signinUsername}
          onChange={(e) => setsigninUsername(e.target.value)}
          required
          className="w-full p-3 border rounded focus:outline-none focus:border-green-600"
        />
      </div>
      <div>
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={signinPassword}
          onChange={(e) => setSigninPassword(e.target.value)}
          required
          className="w-full p-3 border rounded focus:outline-none focus:border-green-600"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
      >
        Log In
      </button>
      <div className="text-center mt-4">
        <span className="text-gray-600">Don't have an account? </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            onToggle();
          }}
          className="text-blue-600 font-semibold"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default Login;
