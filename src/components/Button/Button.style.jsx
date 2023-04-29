import styled from "styled-components";

export const ButtonStyle = styled.button`
  cursor: pointer;
  font-size: 12px;
  line-height: 12px;
  font-weight: 700;
  padding: 4px 24px;
  border-radius: 5px;
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

  &.circle svg {
    font-size: 10px;
  }
`;
