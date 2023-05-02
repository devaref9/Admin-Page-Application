import styled from "styled-components";

export const InputGroupStyle = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  position: absolute;
  left: 0;
  top: -18px;
  color: #212a3e;
  pointer-events: none;
  font-weight: 700;
`;

export const InputStyle = styled.input`
  width: 100%;
  color: #5f5f5f;
  padding: 10px 18px;
  border-radius: var(--borderRadius);
  color: #646b8c;
  border: 1px solid var(--bc, #d1d6ee);
  transition: border-color 0.3s, box-shadow 0.3s;
  font-size: 16px;

  &:hover {
    --bc: #a6accd;
  }

  &:focus-within {
    --bc: #275efe;
    input {
      box-shadow: 0 1px 6px -1px #{rgba(#275efe, 0.32)};
    }
  }
`;

export const InputError = styled.span`
  position: absolute;
  left: 0;
  bottom: -16px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.danger};
`;
