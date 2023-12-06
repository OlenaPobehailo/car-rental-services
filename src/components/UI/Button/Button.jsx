import { ButtonStyled } from './Button.styled';

const Button = ({ children, name, ...props }) => {
  return (
    <ButtonStyled type="button" theme={name} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
