import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  line-height: 12px;
  font-weight: 700;
  padding: 10px 14px;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};
  transition: var(--transition);

  &.primary {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &.danger {
    background-color: ${({ theme }) => theme.colors.danger};
  }

  &.circle {
    padding: 12px;
    border-radius: 50%;
    display: flex;
  }
`;
