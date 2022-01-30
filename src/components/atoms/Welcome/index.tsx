import { BoldText } from "../BoldText";
import React from "react";

import * as S from "./styles";

export function Welcome() {
  return (
    <S.Container>
      <BoldText text="Hello, " size="medium" />
      <BoldText text="Renan Melo" size="big" />
    </S.Container>
  );
}
