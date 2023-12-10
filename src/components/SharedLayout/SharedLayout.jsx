import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from 'components/Footer/Footer';
import { Container } from 'styles/Common.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default SharedLayout;
