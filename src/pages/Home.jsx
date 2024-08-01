import React from 'react';
import { Link } from 'react-router-dom';
// import quizImage from '../assets/images/quiz.svg'; // Replace with an actual image path

const Home = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Welcome to the Quiz Platform</h2>
        <p className="text-lg text-gray-700 mb-8">
          Enhance your knowledge and test your skills with our wide range of quizzes. Whether you're a student, professional, or just looking to have some fun, our platform offers quizzes across various topics and difficulty levels.
        </p>
        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="Quiz Illustration" className="w-1/2 mx-auto mb-6" />
        <div className="flex justify-center space-x-4">
          <Link to="/quiz" className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700">
            Start a Quiz
          </Link>
          <Link to="/create" className="bg-green-500 text-white py-2 px-6 rounded-lg shadow hover:bg-green-700">
            Create a Quiz
          </Link>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Use Our Platform?</h3>
        <ul className="list-disc list-inside text-left text-gray-600 mx-auto max-w-xl">
          <li>Wide range of topics and difficulty levels.</li>
          <li>User-friendly quiz creation tools.</li>
          <li>Real-time results and feedback.</li>
          <li>Responsive design for use on any device.</li>
          <li>Engaging and interactive experience.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
