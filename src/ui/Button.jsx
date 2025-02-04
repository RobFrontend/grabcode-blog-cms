import styled, { css } from "styled-components";

const sizes = {
  small: css`
    color: var(--color-body-background);
    padding: 0.6rem 1.2rem;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 1px;
    border-radius: var(--border-radius-sm);
  `,
  large: css`
    font-size: 1.8rem;
    padding: 1.2rem 2.4rem;
    color: var(--color-body-background);
    border-radius: var(--border-radius-lg);
  `,
};

const variations = {
  danger: css`
    background-color: #dc3545;
  `,
  primary: css`
    background-color: var(--color-hover);
  `,
};

const Button = styled.button`
  border: none;
  cursor: pointer;
  align-self: center;
  justify-self: center;
  font-weight: 500;
  &:hover {
    opacity: 0.6;
  }
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

export default Button;
