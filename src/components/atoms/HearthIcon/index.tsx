import React from "react";

import * as S from "./styles";

import hearthImage from "./hearth.png";
import heartFilledImage from "./hearth-filled.png";

type Props = {
  isLiked?: boolean;
};

export function HearthIcon({ isLiked = false }: Props) {
  return <S.Image source={isLiked ? heartFilledImage : hearthImage} />;
}
