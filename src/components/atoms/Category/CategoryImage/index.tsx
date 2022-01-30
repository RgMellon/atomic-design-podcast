import React from "react";
import { ImageProps } from "react-native";

import * as S from "./styles";

export function CategoryImage({ ...rest }: ImageProps) {
  return <S.Image resizeMode="contain" {...rest} />;
}
