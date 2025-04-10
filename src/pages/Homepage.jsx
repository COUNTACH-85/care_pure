import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { FaAppleAlt, FaHeartbeat, FaGamepad } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const features = [
  {
    title: 'Diet Planner',
    description: 'Get personalized diet plans based on your health goals and preferences.',
    icon: <FaAppleAlt size={40} className="text-green-600" />,
  },
  {
    title: 'Health Games',
    description: 'Engage in fun games designed to improve your cognitive and physical health.',
    icon: <FaGamepad size={40} className="text-green-600" />,
  },
  {
    title: 'Health Blogs',
    description: 'Read expert articles and tips to maintain a healthier lifestyle.',
    icon: <FaHeartbeat size={40} className="text-green-600" />,
  },
];

const Homepage = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      {/* Video Background Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
        >
          <source src="/carepurevid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-20 text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to CarePure</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Your complete digital companion for health, wellness, and nutrition.
          </p>
            <button
              onClick={() => navigate("/signup")}
              className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-white transition-all bg-green-600 rounded-xl group hover:bg-green-700 hover:shadow-2xl"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <span className="relative z-10">Get Started</span>
            </button>
          </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white px-4 md:px-10 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
          What CarePure Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              transitionSpeed={1000}
              className="rounded-2xl shadow-lg"
            >
              <div className="bg-green-50 hover:bg-green-100 p-6 rounded-2xl h-full text-center transition duration-300">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-green-900">{feature.title}</h3>
                <p className="text-gray-700 mt-2">{feature.description}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
