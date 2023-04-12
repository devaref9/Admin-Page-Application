import styled from "styled-components";

export const CheckboxInputStyle = styled.input`
  width: 14px;
  height: 14px;
  border: 0.5px solid #757272;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
