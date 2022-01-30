import React from "react";

import { Label } from "../../../components/atoms/Category/Label";
import { CategoryImage } from "../../../components/atoms/Category/CategoryImage";

import * as S from "./styles";

type Props = {
  data: {
    title: string;
    image: string;
    color: string;
  };
};

export function Category({ data }: Props) {
  return (
    <S.Container color={data.color}>
      <Label label={data.title} />
      <CategoryImage source={{ uri: data.image }} />
    </S.Container>
  );
}
