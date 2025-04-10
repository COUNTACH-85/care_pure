import React, { useState } from 'react';
import { supabase } from '../createClient';
import { Link } from 'react-router-dom';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [occupation, setOccupation] = useState('');
  const [customOccupation, setCustomOccupation] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    if (signupPassword !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Step 1: Create user with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: signupEmail,
      password: signupPassword,
    });

    if (authError) {
      alert('Sign Up Failed: ' + authError.message);
      return;
    }

    const user = authData.user;

    // Step 2: Insert profile info into Users table
    const finalOccupation = occupation === 'Other' ? customOccupation : occupation;

    const { error: insertError } = await supabase
      .from('Users')
      .insert([{
        id: user.id, // important: match auth user id
        Username: fullName,
        Email: signupEmail,
        Age: age,
        Height: height,
        Weight: weight,
        Occupation: finalOccupation,
      }]);

    if (insertError) {
      alert('Sign Up succeeded but failed to save profile info: ' + insertError.message);
    } else {
      alert('Sign Up Successful! Please check your email to confirm your account.');
      // Reset form
      setFullName('');
      setSignupEmail('');
      setSignupPassword('');
      setConfirmPassword('');
      setAge('');
      setHeight('');
      setWeight('');
      setOccupation('');
      setCustomOccupation('');
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
            <h2 className="text-4xl font-bold">Join Our Community</h2>
            <p className="mt-4 text-lg">
              Create an account to enjoy all the features and benefits we offer.
            </p>
          </div>
        </div>
        <div className="flex-1 p-10 shadow-lg bg-gray-100 flex flex-col rounded-lg justify-center">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">Create Account</h2>
            <p className="text-gray-600 mt-2">
              Sign up to get started with our service
            </p>
          </div>
          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium">Username:</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full p-3 border rounded focus:outline-none focus:border-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email Address:</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
                className="w-full p-3 border rounded focus:outline-none focus:border-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Password:</label>
              <input
                type="password"
                placeholder="Create a password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
                className="w-full p-3 border rounded focus:outline-none focus:border-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Confirm Password:</label>
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full p-3 border rounded focus:outline-none focus:border-green-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition duration-200"
            >
              Sign Up
            </button>
            <div className="text-center mt-4">
              <span className="text-gray-600">Already have an account? </span>
              <Link to="/login" className="text-blue-600 font-semibold">
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
