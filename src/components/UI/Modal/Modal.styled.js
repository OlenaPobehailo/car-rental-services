import styled from 'styled-components';
import theme from 'styles/theme';

const { colors } = theme;

export const ModalWrapper = styled.div`
  position: fixed;

  inset: 0;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.5);
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: ${colors.background.primary};

  padding: 40px 37px;
  overflow: hidden;
  max-width: 541px;
  border-radius: 24px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;
