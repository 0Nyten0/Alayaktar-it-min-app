import React from 'react';
import Progress from '../components/Progress';
import { Container } from 'react-bootstrap';

const Profile = () => {
  const userId = "123"; // Идентификатор текущего пользователя

  return (
    <Container>
      <h2>Профиль пользователя</h2>
      <Progress userId={userId} />
    </Container>
  );
};

export default Profile;
