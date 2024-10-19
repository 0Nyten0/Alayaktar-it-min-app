import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, ProgressBar, Accordion, Card, Button } from 'react-bootstrap';

const CourseDetails = () => {
  const { courseId } = useParams(); // Получаем ID курса из URL
  const [progress, setProgress] = useState(0); // Хранение прогресса
  const [course, setCourse] = useState({
    title: 'Курс по JavaScript',
    description: 'Изучите основы JavaScript',
    duration: '4 недели',
    level: 'Начинающий',
    objectives: 'Научитесь основам JavaScript и создайте свой первый проект.',
    modules: [
      {
        id: 1,
        title: 'Модуль 1: Введение в JavaScript',
        description: 'Этот модуль охватывает основы JavaScript, включая синтаксис и основы программирования.',
        lessons: [
          { 
            id: 1, 
            title: 'Урок 1: Основы JavaScript', 
            content: 'Этот урок охватывает основы JavaScript.',
            presentation: '/presentation1.pdf', // Ссылка на файл
            video: '/video1.mp4', // Ссылка на видео
            completed: false 
          },
          { 
            id: 2, 
            title: 'Урок 2: Установка окружения', 
            content: 'Этот урок охватывает процесс установки окружения для JavaScript.',
            presentation: '/presentation2.pdf',
            video: '/video2.mp4',
            completed: false 
          },
        ],
      },
      {
        id: 2,
        title: 'Модуль 2: Условия и циклы',
        description: 'Во втором модуле вы узнаете об условиях и циклах, которые позволяют создавать динамические программы.',
        lessons: [
          { 
            id: 3, 
            title: 'Урок 1: Условия if', 
            content: 'Этот урок охватывает условия if и else.',
            presentation: '/presentation3.pdf',
            video: '/video3.mp4',
            completed: false 
          },
          { 
            id: 4, 
            title: 'Урок 2: Циклы', 
            content: 'Этот урок охватывает циклы for и while.',
            presentation: '/presentation4.pdf',
            video: '/video4.mp4',
            completed: false 
          },
        ],
      },
    ],
  });

  // Функция для обновления прогресса
  const updateProgress = () => {
    const totalLessons = course.modules.reduce((sum, module) => sum + module.lessons.length, 0);
    const completedLessons = course.modules.reduce(
      (sum, module) => sum + module.lessons.filter(lesson => lesson.completed).length, 
      0
    );
    setProgress(Math.round((completedLessons / totalLessons) * 100)); // Рассчет прогресса
  };

  // Вызываем обновление прогресса каждый раз при изменении данных о курсе
  useEffect(() => {
    updateProgress();
  }, [course]);

  // Функция завершения урока
  const completeLesson = (moduleId, lessonId) => {
    const updatedModules = course.modules.map(module => {
      if (module.id === moduleId) {
        return {
          ...module,
          lessons: module.lessons.map(lesson => 
            lesson.id === lessonId ? { ...lesson, completed: true } : lesson
          ),
        };
      }
      return module;
    });
    
    setCourse(prevCourse => ({
      ...prevCourse,
      modules: updatedModules,
    }));

    updateProgress(); // Обновляем прогресс после завершения урока
  };

  // Обработчик сообщений из нового окна
  useEffect(() => {
    const handleCompleteLesson = (event) => {
      const { moduleId, lessonId } = event.data;
      if (moduleId && lessonId) {
        completeLesson(moduleId, lessonId);
      }
    };

    window.addEventListener('message', handleCompleteLesson);

    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('message', handleCompleteLesson);
    };
  }, []);

  // Функция открытия урока в новой вкладке
  const openLessonInNewTab = (lesson, moduleId) => {
    const lessonMaterials = `
      <html>
      <head>
        <title>${lesson.title}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: #f8f9fa;
          }
          .lesson-container {
            max-width: 900px;
            width: 100%;
            background: white;
            padding: 20px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            margin: 20px 0;
          }
          h1 {
            font-size: 24px;
            margin-bottom: 20px;
          }
          iframe {
            width: 100%;
            height: 500px;
            margin-bottom: 20px;
            border-radius: 8px;
          }
          video {
            width: 100%;
            height: 500px;
            margin-bottom: 20px;
            border-radius: 8px;
          }
          button {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <div class="lesson-container">
          <h1>${lesson.title}</h1>
          <iframe src="${lesson.presentation}" frameborder="0" allowfullscreen></iframe>
          <video controls>
            <source src="${lesson.video}" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onclick="window.opener.postMessage({ moduleId: ${moduleId}, lessonId: ${lesson.id} }, '*'); window.close();">Закончить урок</button> <!-- Кнопка Закончить урок -->
        </div>
      </body>
      </html>
    `;
    
    const newWindow = window.open();
    newWindow.document.write(lessonMaterials);
    newWindow.document.close();
  };

  return (
    <Container>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <p>Продолжительность: {course.duration}</p>
      <p>Уровень сложности: {course.level}</p>
      <p>Цели и программа курса: {course.objectives}</p>
      <ProgressBar now={progress} label={`${progress}%`} />
      <h3>Модули:</h3>
      <Accordion defaultActiveKey="0">
        {course.modules.map((module, moduleIndex) => (
          <Card key={module.id}>
            <Accordion.Item eventKey={String(moduleIndex)}>
              <Accordion.Header>{module.title}</Accordion.Header>
              <Accordion.Body>
                <p>{module.description}</p> {/* Краткая информация о модуле */}
                <Accordion>
                  {module.lessons.map((lesson, lessonIndex) => (
                    <Card key={lesson.id}>
                      <Accordion.Item eventKey={String(lessonIndex)}>
                        <Accordion.Header>
                          {lesson.completed ? <s>{lesson.title}</s> : lesson.title}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>{lesson.content}</p> {/* Краткое описание урока */}
                          <Button 
                            variant="primary" 
                            onClick={() => openLessonInNewTab(lesson, module.id)} // Открыть урок в новой вкладке
                          >
                            Начать урок
                          </Button>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Card>
                  ))}
                </Accordion>
              </Accordion.Body>
            </Accordion.Item>
          </Card>
        ))}
      </Accordion>
    </Container>
  );
};

export default CourseDetails;
