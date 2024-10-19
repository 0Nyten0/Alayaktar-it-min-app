import React from 'react';
import { Button } from 'react-bootstrap';

const Lesson = ({ courseId }) => {
  const handleCompleteLesson = () => {
    // Логика завершения урока
  };

  return (
    <div>
      <h2>Урок курса {courseId}</h2>
      <Button variant="success" onClick={handleCompleteLesson}>Завершить урок</Button>
    </div>
  );
};

export default Lesson;
