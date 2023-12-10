import { Link } from "react-router-dom";
import {
  NotFoundImage,
  NotFoundMessage,
  NotFoundTitle,
  NotFoundWrapper,
  StyledLink,
} from "./NotFoundPage.styled";

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>404 Not Found</NotFoundTitle>
      <NotFoundMessage>
        Unfortunately, the page you are looking for most likely rented our car
        and left. Do you want to see it?
      </NotFoundMessage>

      <StyledLink to="/">Rent a car.</StyledLink>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
