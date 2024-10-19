import React from 'react';

const LessonTwo = () => {
  return (
    <div style={styles.container}>
      <div style={styles.lessonContent}>
        <h1>Урок 2: Установка окружения</h1>
        <p>Этот урок научит вас, как настроить окружение для работы с JavaScript.</p>
        <iframe
          src="/presentation2.pdf" 
          style={styles.iframe}
          title="Презентация"
        />
        <video controls style={styles.video}>
          <source src="/video2.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <button onClick={() => alert('Урок завершён!')} style={styles.button}>
          Завершить урок
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
  },
  lessonContent: {
    maxWidth: '900px',
    width: '100%',
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  iframe: {
    width: '100%',
    height: '500px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  video: {
    width: '100%',
    height: '500px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default LessonTwo;
