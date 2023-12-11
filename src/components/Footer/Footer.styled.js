import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: auto;
  width: 100%;
  padding: 20px;
  background-color: #e0ecff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

export const StyledGithubIcon = styled(FaGithub)`
  color: #3470ff;
  font-size: 25px;
`;

export const StyledLinkedinIcon = styled(FaLinkedin)`
  color: #3470ff;
  font-size: 25px;
`;
