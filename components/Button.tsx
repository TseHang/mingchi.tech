import styled, { css } from 'styled-components';

type TButtonProps = {
  outline?: boolean;
};

const outlineStyle = css`
  border: solid 1px;
  border-radius: 15px;

  &:hover,
  &:focus {
    border-color: ${p => p.theme.colors.main};
    background: ${p => p.theme.colors.main};
    color: white;
  }
`;

export default styled.div<TButtonProps>`
  color: ${p => p.color || p.theme.colors.lightGray};
  padding: 0.15em 0.5em;
  margin: 1em 0.5em;
  transform: all 0.3s ease-in;

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${p => p.theme.colors.main};
  }

  ${p => p.outline && outlineStyle}
`;
