import React from "react";
import { ImageProps } from "react-native";

import * as S from "./styles";

export function PodcastLogo({ ...rest }: ImageProps) {
  return <S.Image {...rest} />;
}
