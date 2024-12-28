import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CourseDetails.css'; // Assuming you have a CSS file for styling

// Importing images from the src/assets folder
import cyberImage from '../assets/cyber.jpg';
import webdevImage from '../assets/web.jpg';
import webdesignImage from '../assets/design.jpg';
import ethicalhackingImage from '../assets/ethical.jpg';
import blockchainImage from '../assets/block.jpg';
import devopsImage from '../assets/devops.jpg';
import backendImage from '../assets/backend.jpg';
import pythonImage from '../assets/python.jpg';

const courses = [
  {
    id: 1,
    name: 'Introduction to Cybersecurity',
    description: 'Learn the basics of cybersecurity.',
    price: 100,
    discountedPrice: 80,
    image: cyberImage, // Updated path
    duration: '4 weeks',
  },
  {
    id: 2,
    name: 'Web Development Bootcamp',
    description: 'Master front-end and back-end development.',
    price: 150,
    discountedPrice: 120,
    image: webdevImage, // Updated path
    duration: '6 weeks',
  },
  {
    id: 3,
    name: 'Web Design for Beginners',
    description: 'Learn the principles of modern web design.',
    price: 90,
    discountedPrice: 70,
    image: webdesignImage, // Updated path
    duration: '3 weeks',
  },
  {
    id: 4,
    name: 'Ethical Hacking Essentials',
    description: 'Explore the ethical side of hacking.',
    price: 180,
    discountedPrice: 150,
    image: ethicalhackingImage, // Updated path
    duration: '5 weeks',
  },
  {
    id: 5,
    name: 'Blockchain Technology',
    description: 'Understand blockchain and its applications.',
    price: 200,
    discountedPrice: 160,
    image: blockchainImage, // Updated path
    duration: '6 weeks',
  },
  {
    id: 6,
    name: 'DevOps Fundamentals',
    description: 'Learn the DevOps lifecycle and practices.',
    price: 140,
    discountedPrice: 110,
    image: devopsImage, // Updated path
    duration: '4 weeks',
  },
  {
    id: 7,
    name: 'Backend Web Development',
    description: 'Master backend technologies and databases.',
    price: 170,
    discountedPrice: 140,
    image: backendImage, // Updated path
    duration: '6 weeks',
  },
  {
    id: 8,
    name: 'Python Programming',
    description: 'Learn Python programming from scratch.',
    price: 120,
    discountedPrice: 100,
    image: pythonImage, // Updated path
    duration: '5 weeks',
  },
];

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comments, setComments] = useState([
    { author: 'Admin', text: 'Great course for beginners!', id: 1 },
  ]);
  const [newComment, setNewComment] = useState('');

  const course = courses.find((course) => course.id === parseInt(id));
  if (!course) return <p>Course not found.</p>;

  const handleGetCourse = () => navigate('/checkout', { state: { course } });

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { author: 'User', text: newComment, id: Date.now() }]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  return (
    <div className="course-details-page">
      <h2>{course.name}</h2>
      <img src={course.image} alt={course.name} className="course-image" />
      <p>{course.description}</p>
      <p>Duration: {course.duration}</p>
      <p>
        Price: <span className="original-price">${course.price}</span>{' '}
        <span className="discounted-price">${course.discountedPrice}</span>
      </p>
      <button className="get-course-button" onClick={handleGetCourse}>
        Get Course
      </button>

      <div className="comments-section">
        <h3>Comments</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="comment">
              <p>
                <strong>{comment.author}:</strong> {comment.text}
              </p>
              <button
                onClick={() => handleDeleteComment(comment.id)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className="add-comment">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add your comment"
          ></textarea>
          <button onClick={handleAddComment} className="add-comment-button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
