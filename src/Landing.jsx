import React from 'react';
import Header from './Components/Header/Header';
import Container from './Components/Main/Container/Container';
import { useNavigate } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

const Landing = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <main>
        <Container />
      </main>
      <Footer></Footer>
    </>
  );
};

export default Landing;