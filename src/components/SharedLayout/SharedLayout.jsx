import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "components/Footer/Footer";
import { Container } from "styles/Common.styled";

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      <Footer />
    </Container>
  );
};

export default SharedLayout;
