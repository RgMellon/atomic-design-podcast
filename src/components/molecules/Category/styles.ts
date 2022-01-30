import styled, { css } from "styled-components/native";

type Props = {
  color: string;
};

export const Container = styled.View<Props>`
  ${({ color }) => css`
    width: 121px;
    height: 149px;
    border-radius: 25px;
    background: ${color};
    margin-right: 15px;

    justify-content: flex-end;
    align-items: center;
  `}
`;
