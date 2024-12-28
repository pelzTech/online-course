import { Link } from 'react-router-dom';
import { categories } from './CourseData';

const Categories = () => (
  <div className="categories">
    <h1>Course Categories</h1>
    <div className="category-list">
      {categories.map((category) => (
        <Link to={`/categories/${category.id}`} key={category.id}>
          <div className="category-card">
            <h2>{category.name}</h2>
            <p>{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default Categories;
