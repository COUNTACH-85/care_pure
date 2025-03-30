import React, { useState } from 'react';
import Signup from './components/signup';
import Login from './components/login';

const Userpage = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className='bg-gray-200 flex items-center justify-center min-h-screen'>
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
            <h2 className="text-4xl font-bold">
              {isSignup ? 'Join Our Community' : 'Welcome Back'}
            </h2>
            <p className="mt-4 text-lg">
              {isSignup
                ? 'Create an account to enjoy all the features and benefits we offer.'
                : 'Log in to access your account and continue your journey with us.'}
            </p>
          </div>
        </div>
        <div className="flex-1 p-10 shadow-lg bg-gray-100 flex flex-col rounded-lg justify-center">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">
              {isSignup ? 'Create Account' : 'Log In'}
            </h2>
            <p className="text-gray-600 mt-2">
              {isSignup
                ? 'Sign up to get started with our service'
                : 'Enter your credentials to access your account'}
            </p>
          </div>
          {isSignup ? (
            <Signup onToggle={() => setIsSignup(false)} />
          ) : (
            <Login onToggle={() => setIsSignup(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Userpage;
