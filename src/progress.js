// progress.js

let userProgress = {}; // Хранит прогресс пользователя

const saveProgress = (userId, courseId, completedLessons, totalLessons) => {
  if (!userProgress[userId]) {
    userProgress[userId] = { courses: [] };
  }

  const courseIndex = userProgress[userId].courses.findIndex(course => course.courseId === courseId);
  
  if (courseIndex === -1) {
    userProgress[userId].courses.push({
      courseId,
      progress: {
        lessonsCompleted: completedLessons,
        totalLessons,
      },
    });
  } else {
    userProgress[userId].courses[courseIndex].progress.lessonsCompleted = completedLessons;
  }
};

const getProgress = (userId) => {
  return userProgress[userId] || { courses: [] };
};

export { saveProgress, getProgress };
