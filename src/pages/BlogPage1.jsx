import React from 'react';
import Header from '../components/Header';
import BlogCard from '../components/BlogCard1';
import Footer from '../components/footer';

const BlogPage = () => {
  // Predefined blog posts data about healthcare topics.
  const blogPosts = [
    {
      title: 'Understanding Diabetes Management',
      content:
        'Diabetes management involves a combination of healthy eating, regular physical activity, and monitoring blood sugar levels. It is essential for maintaining overall health and preventing complications.',
      date: 'March 30, 2025',
    },
    {
      title: 'The Importance of Mental Health',
      content:
        'Mental health is just as important as physical health. It affects how we think, feel, and act. Prioritizing mental well-being can lead to better overall health outcomes.',
      date: 'March 29, 2025',
    },
    {
      title: 'Healthy Eating Tips for Families',
      content:
        'Eating healthy as a family can be fun and rewarding. Incorporating a variety of fruits and vegetables into meals can promote good health for all family members.',
      date: 'March 28, 2025',
    },
    {
        title: 'Staying Active During the Pandemic',
        content:
          'Finding ways to stay active during challenging times is crucial for physical and mental health. Simple home workouts or outdoor activities can help maintain fitness levels.',
        date: 'March 27, 2025',
      },
      {
        title: 'Preventive Care: Why Regular Check-Ups Matter',
        content:
          'Regular check-ups with healthcare providers can help detect potential health issues early on. Preventive care is key to maintaining long-term health.',
        date: 'March 26, 2025',
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="max-w-3xl mx-auto p-4">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} title={post.title} content={post.content} date={post.date} />
          ))}
        </div>
        <Footer />
      </div>
    );
  };
  
  export default BlogPage;