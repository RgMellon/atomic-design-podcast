import React from "react";

import * as S from "./styles";

type Props = {
  subtitle: string;
};

export function Subtitle({ subtitle }: Props) {
  return <S.Subtitle>{subtitle}</S.Subtitle>;
}
