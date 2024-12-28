import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ name, description, price, discountedPrice, image, duration }) => {
  const navigate = useNavigate();

  const handleGetCourse = () => {
    navigate('/checkout', {
      state: {
        course: { name, price, discountedPrice, duration },
      },
    });
  };

  return (
    <div className="course-card">
      <img src={image} alt={name} className="course-image" />
      <div className="course-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Duration: {duration}</p>
        <p>
          Price: <span className="original-price">${price}</span>{' '}
          <span className="discounted-price">${discountedPrice}</span>
        </p>
        <button className="get-course-button" onClick={handleGetCourse}>
          Get Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
