import styled from 'styled-components';

export const Title = styled.p`
  color: #8a8a89;

  font-weight: 500;
  line-height: 1.3;
`;
export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  border-radius: 14px;
  background: #f7f7fb;

  &:first-of-type {
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }
  label {
    position: absolute;
    left: 24px;
    top: 14px;
  }
`;

export const InputFrom = styled.input`
  width: 100%;
  max-width: 160px;
  height: 48px;
  padding-left: 70px;

  background: #f7f7fb;

  color: #121417;
  border-radius: 14px 0px 0px 14px;

  border: transparent;
  outline: transparent;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const InputTo = styled.input`
  max-width: 160px;
  height: 48px;
  padding-left: 50px;

  outline: transparent;

  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;

  border: transparent;

  background: #f7f7fb;

  color: #121417;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;
