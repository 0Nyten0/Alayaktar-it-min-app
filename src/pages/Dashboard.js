import React from 'react';
import { Container } from 'react-bootstrap';
import Course from '../pages/Course'; 


const courses = [
  { id: '1', title: 'Курс по JavaScript', description: 'Изучите основы JavaScript' },
  { id: '2', title: 'Курс по React', description: 'Углубитесь в разработку интерфейсов с React' },
  // Добавьте больше курсов здесь
];

const Dashboard = () => {
  return (
    <Container>
      <h2>Доступные курсы</h2>
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </Container>
  );
};

export default Dashboard;
