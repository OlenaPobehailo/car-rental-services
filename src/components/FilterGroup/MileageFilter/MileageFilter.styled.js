import styled from "styled-components";

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

  display: flex;
  align-items: center;
  border-radius: 14px;
  background: #f7f7fb;

  &:first-of-type {
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }

  label {
    position: absolute;
    left: 10px;
    top: 14px;

    color: #121417;

    font-size: 10px;
    font-weight: 400;
    line-height: 1.1;

    @media screen and (min-width: 768px) {
      left: 24px;
      top: 14px;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.11;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 160px;
  height: 40px;

  background: #f7f7fb;
  color: #121417;
  border: transparent;
  outline: transparent;

  font-size: 10px;
  font-weight: 500;
  line-height: 1.11;

  @media screen and (min-width: 768px) {
    height: 48px;

    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }
`;

export const InputFrom = styled(Input)`
  padding-left: 38px;
  border-radius: 14px 0px 0px 14px;

  @media screen and (min-width: 768px) {
    padding-left: 70px;
  }
`;

export const InputTo = styled(Input)`
  padding-left: 28px;
  border-radius: 0px 14px 14px 0px;

  @media screen and (min-width: 768px) {
    padding-left: 70px;
  }
`;
