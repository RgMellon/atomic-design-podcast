import styled, { css } from "styled-components/native";
import { SizeProps } from ".";

type Props = {
  size: SizeProps;
};

const textModifiers = {
  big: () => css`
    font-size: 30px;
  `,

  medium: () => css`
    font-size: 20px;
  `,
};

export const Text = styled.Text<Props>`
  ${({ size }) => css`
    font-weight: bold;
    color: #fff;
    ${textModifiers[size]}
  `}
`;
