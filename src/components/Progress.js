import React from 'react';
import { getProgress } from '../progress';

const Progress = ({ userId }) => {
  const progressData = getProgress(userId);

  return (
    <div>
      <h2>Ваш прогресс</h2>
      {progressData.courses.length === 0 ? (
        <p>Нет данных о прогрессе.</p>
      ) : (
        <ul>
          {progressData.courses.map((course) => (
            <li key={course.courseId}>
              <h3>Курс: {course.courseId}</h3>
              <p>
                Пройдено: {course.progress.lessonsCompleted} из {course.progress.totalLessons} уроков
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Progress;
