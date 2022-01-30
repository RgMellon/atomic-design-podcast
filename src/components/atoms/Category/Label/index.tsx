import React from "react";

import * as S from "./styles";

type Props = {
  label: string;
};

export function Label({ label }: Props) {
  return <S.Label>{label}</S.Label>;
}
