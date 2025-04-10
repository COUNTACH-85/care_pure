import React from 'react';

const BlogCard = ({ title, content, date }) => {
  return (
    <div className="bg-healthcareBackground shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-healthcareGreen">{title}</h2>
      <p className="text-gray-600 mt-2">{content}</p>
      <p className="text-gray-500 text-sm mt-4">{date}</p>
    </div>
  );
};

export default BlogCard1;