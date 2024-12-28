import React from 'react';
import CourseCard from '../components/CourseCard';

const ProductManagement = () => (
  <div>
    <h2>Product Management Courses</h2>
    <div className="courses-grid">
      {productManagementCourses.map((course) => (
        <CourseCard key={course.name} course={course} />
      ))}
    </div>
  </div>
);

export default ProductManagement;
