import React, { useState } from 'react';
import { supabase } from '../createClient';

function Signup({ onToggle }) {
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

    const finalOccupation = occupation === 'Other' ? customOccupation : occupation;

    const { data, error } = await supabase
      .from('Users')
      .insert([{ 
        Username: fullName, 
        Email: signupEmail, 
        Password: signupPassword, 
        Age: age, 
        Height: height, 
        Weight: weight, 
        Occupation: finalOccupation 
      }]);

    if (error) {
      console.error('Error signing up:', error.message);
      alert('Sign Up Failed: ' + error.message);
    } else {
      console.log('User signed up:', data);
      alert('Sign Up Successful!');
      setFullName('');
      setSignupEmail('');
      setSignupPassword('');
      setConfirmPassword('');
      setAge('');
      setHeight('');
      setWeight('');
      setOccupation('');
      setCustomOccupation('');
      onToggle();
    }
  };

  return (
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
      <div className="flex flex-row space-x-6">
        <div>
          <label className="block text-gray-700 font-medium">Age:</label>
          <input
            type="number"
            placeholder="Age"
            value={age}
            min="0"
            max="120"
            onChange={(e) => setAge(e.target.value)}
            required
            className="w-30 p-3 border rounded focus:outline-none focus:border-green-600"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Height (in cm):</label>
          <input
            type="number"
            placeholder="Height"
            step="0.01"
            min="0"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
            className="w-38 p-3 border rounded focus:outline-none focus:border-green-600"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Weight (in kg):</label>
          <input
            type="number"
            placeholder="Weight"
            step="0.01"
            min="0"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            className="w-30 p-3 border rounded focus:outline-none focus:border-green-600"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700 font-medium">Occupation:</label>
        <select
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          required
          className="w-full p-3 border rounded focus:outline-none focus:border-green-600"
        >
          <option value="" disabled>Select your occupation</option>
          <option value="Student">Student</option>
          <option value="Corporate">Corporate</option>
          <option value="Other">Other</option>
        </select>
      </div>
      {occupation === 'Other' && (
        <div>
          <label className="block text-gray-700 font-medium">Specify Occupation:</label>
          <input
            type="text"
            placeholder="Enter your occupation"
            value={customOccupation}
            onChange={(e) => setCustomOccupation(e.target.value)}
            required
            className="w-full p-3 border rounded focus:outline-none focus:border-green-600"
          />
        </div>
      )}
      <button
        type="submit"
        className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition duration-200"
      >
        Sign Up
      </button>
      <div className="text-center mt-4">
        <span className="text-gray-600">Already have an account? </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            onToggle();
          }}
          className="text-blue-600 font-semibold"
        >
          Log In
        </button>
      </div>
    </form>
  );
}

export default Signup;

