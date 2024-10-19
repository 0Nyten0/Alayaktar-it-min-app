import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Course from './pages/Course';
import NavBar from './components/NavBar';
import Lesson from './pages/Lesson';
import Register from './pages/Register'; // Новый импорт
import Login from './pages/Login';  
import CourseDetails from './pages/CourseDetails';
import LessonTwo from './pages/LessonTwo'; 

function App() {
  return (
    <Router>
      <NavBar />
      <Routes> {/* Заменяем Switch на Routes */}
        <Route path="/" element={<Dashboard />} /> {/* Заменяем component на element */}
        <Route path="/course/:courseId" element={<CourseDetails />} /> {/* Добавляем маршрут для курса */}
        {/* Добавь другие маршруты, такие как профиль и вход */}
        <Route path="/course/:courseId" component={CourseDetails} />
        <Route path="/lesson/2" component={LessonTwo} /> {/* Маршрут для урока 2 */}

      </Routes>
    </Router>
  );
}

export default App;