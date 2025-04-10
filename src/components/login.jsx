import React, { useState } from 'react';
import { supabase } from '../createClient';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      alert('Login Failed: ' + error.message);
    } else {
      alert('Login Successful!');
      navigate("/dashboard");
    }
  };

  return (
    <div className="bg-gray-200 flex items-center justify-center min-h-screen">
      <div className="flex my-16 mx-6 md:mx-28 lg:mx-52">
        <div
          className="hidden lg:flex lg:flex-1 relative bg-cover bg-center overflow-hidden rounded-l-lg shadow-lg"
          style={{
            backgroundImage:
              "url('https://assets.clevelandclinic.org/transform/LargeFeatureImage/912a2184-53fc-4b2b-8f20-8ba5fb13f5fc/runner-putting-on-shoes-2150255632')",
          }}
        >
          <div className="absolute inset-0 bg-green-300 opacity-50"></div>
          <div className="relative z-10 flex flex-col justify-center items-center text-white p-10 text-center">
            <h2 className="text-4xl font-bold">Welcome Back</h2>
            <p className="mt-4 text-lg">
              Log in to access your account and continue your journey with us.
            </p>
          </div>
        </div>
        <div className="flex-1 p-10 shadow-lg bg-gray-100 flex flex-col rounded-lg justify-center">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">Log In</h2>
            <p className="text-gray-600 mt-2">
              Enter your credentials to access your account
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border rounded focus:outline-none focus:border-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <Link to="/signup" className="text-blue-600 font-semibold">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
