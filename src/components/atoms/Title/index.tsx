import React from "react";
import { View } from "react-native";

import * as S from "./styles";

type Props = {
  title: string;
};

export function Title({ title }: Props) {
  return <S.Title>{title}</S.Title>;
}
