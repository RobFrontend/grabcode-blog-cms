import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.4rem;

  &::file-selector-button {
    border-radius: var(--border-radius-tiny);
    font-weight: 400;
    padding: 0.6rem 1.2rem;
    cursor: pointer;
    background-color: var(--color-background);
    border: none;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export default FileInput;
