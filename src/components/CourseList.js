import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, title: 'Основы программирования' },
  { id: 2, title: 'Веб-разработка' },
  { id: 3, title: 'Машинное обучение' }
];

const CourseList = () => {
  return (
    <div>
      <h2>Доступные курсы</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
