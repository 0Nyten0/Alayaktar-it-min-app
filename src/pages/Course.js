import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
        <Link to={`/course/${course.id}`}>
          <Button variant="primary">Начать курс</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Course;
