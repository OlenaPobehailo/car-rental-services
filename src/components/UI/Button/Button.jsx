import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled";

const Button = ({ children, name, ...props }) => {
  return (
    <ButtonStyled type="button" theme={name} {...props}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
};

export default Button;
