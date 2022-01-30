import React from "react";

import * as S from "./styles";

export type SizeProps = "big" | "medium";

type Props = {
  text: string;
  size: SizeProps;
};

export function BoldText({ text, size }: Props) {
  return <S.Text size={size}>{text}</S.Text>;
}
