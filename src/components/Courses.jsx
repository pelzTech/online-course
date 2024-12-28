import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css'; // Import the CSS file for styling

// Importing images
import cyberImage from '../assets/web.jpg';
import webDevImage from '../assets/web.jpg';
import webDesignImage from '../assets/design.jpg';
import ethicalHackingImage from '../assets/ethical.jpg';
import blockchainImage from '../assets/block.jpg';
import devOpsImage from '../assets/devops.jpg';
import backendImage from '../assets/backend.jpg';
import pythonImage from '../assets/python.jpg';

const courses = [
  {
    id: 1,
    name: 'Introduction to Cybersecurity',
    description: 'Learn the basics of cybersecurity.',
    price: 100,
    discountedPrice: 80,
    image: cyberImage, 
    duration: '4 weeks',
  },
  {
    id: 2,
    name: 'Web Development Bootcamp',
    description: 'Master front-end and back-end development.',
    price: 150,
    discountedPrice: 120,
    image: webDevImage, 
    duration: '6 weeks',
  },
  {
    id: 3,
    name: 'Web Design for Beginners',
    description: 'Learn the principles of modern web design.',
    price: 90,
    discountedPrice: 70,
    image: webDesignImage, 
    duration: '3 weeks',
  },
  {
    id: 4,
    name: 'Ethical Hacking Essentials',
    description: 'Explore the ethical side of hacking.',
    price: 180,
    discountedPrice: 150,
    image: ethicalHackingImage,
    duration: '5 weeks',
  },
  {
    id: 5,
    name: 'Blockchain Technology',
    description: 'Understand blockchain and its applications.',
    price: 200,
    discountedPrice: 160,
    image: blockchainImage, 
    duration: '6 weeks',
  },
  {
    id: 6,
    name: 'DevOps Fundamentals',
    description: 'Learn the DevOps lifecycle and practices.',
    price: 140,
    discountedPrice: 110,
    image: devOpsImage, 
    duration: '4 weeks',
  },
  {
    id: 7,
    name: 'Backend Web Development',
    description: 'Master backend technologies and databases.',
    price: 170,
    discountedPrice: 140,
    image: backendImage, 
    duration: '6 weeks',
  },
  {
    id: 8,
    name: 'Python Programming',
    description: 'Learn Python programming from scratch.',
    price: 120,
    discountedPrice: 100,
    image: pythonImage, 
    duration: '5 weeks',
  },
];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  return (
    <div className="courses-page">
      <h2 className="courses-title">Available Courses</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <button className="search-button">🔍</button>
      </div>
      <div className="course-list">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <img
                src={course.image}
                alt={course.name}
                className="course-image"
              />
              <h3 className="course-title">
                <Link to={`/courses/${course.id}`} className="course-link">
                  {course.name}
                </Link>
              </h3>
              <p className="course-description">{course.description}</p>
              <p className="course-duration">Duration: {course.duration}</p>
              <p className="course-pricing">
                Price: <span className="original-price">${course.price}</span>{' '}
                <span className="discounted-price">${course.discountedPrice}</span>
              </p>
              <Link to={`/courses/${course.id}`} className="view-details-button">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No courses found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
