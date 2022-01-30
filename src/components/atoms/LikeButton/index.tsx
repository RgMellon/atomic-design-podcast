import React from "react";
import { TouchableOpacityProps, View } from "react-native";

type LikedButtonProps = {
  children: React.ReactNode;
} & TouchableOpacityProps;

import * as S from "./style";

export function LikeButton({ children, ...rest }: LikedButtonProps) {
  return <S.Container {...rest}>{children}</S.Container>;
}
