const { default: styled } = require('styled-components');

export const StyledSelect = styled.div`
  position: relative;
  width: 224px;
`;

export const SelectTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: none;
  padding: 14px 18px;
  border-radius: 14px;
  background: #f7f7fb;
  position: relative;
  z-index: 2;
`;

export const SelectButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;
  height: 274px;
  margin-top: 4px;
  padding: 14px 18px;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  overflow-y: scroll;
  z-index: 1;
  pointer-events: auto;
`;

export const Option = styled.div`
  color: rgba(18, 20, 23, 0.2);

  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  cursor: pointer;

  &:hover {
    color: rgba(18, 20, 23, 1);
  }
`;
