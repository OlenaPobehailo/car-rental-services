import {
  NotFoundMessage,
  NotFoundTitle,
  NotFoundWrapper,
  StyledLink,
} from "./NotFoundPage.styled";
import { StyledCommonWrapper } from "styles/Common.styled";

const NotFoundPage = () => {
  return (
    <StyledCommonWrapper>
      <NotFoundWrapper>
        <NotFoundTitle>404 Not Found</NotFoundTitle>
        <NotFoundMessage>
          Unfortunately, the page you are looking for most likely rented our car
          and left. Do you want to see it?
        </NotFoundMessage>

        <StyledLink to="/">Rent a car.</StyledLink>
      </NotFoundWrapper>
    </StyledCommonWrapper>
  );
};

export default NotFoundPage;
