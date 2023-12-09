import { StyledFooter, StyledGithubIcon, StyledLinkedinIcon } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <span>by Olena Pobehailo</span>
      <a href="https://github.com/OlenaPobehailo" target="_blank" rel="noreferrer">
        <StyledGithubIcon />
      </a>

      <a href="https://www.linkedin.com/in/olena-pobehailo/" target="_blank" rel="noreferrer">
        <StyledLinkedinIcon />
      </a>
    </StyledFooter>
  );
};

export default Footer;
