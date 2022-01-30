import React from "react";

type Props = {
  amount: number;
};

import * as S from "./style";

export function AmountLikeText({ amount }: Props) {
  return <S.Amount> {amount} </S.Amount>;
}
