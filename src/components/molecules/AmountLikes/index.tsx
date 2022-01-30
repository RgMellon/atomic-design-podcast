import { RootState } from "@/store";
import React from "react";

import { HearthIcon } from "../../../components/atoms/HearthIcon";
import { AmountLikeText } from "../../../components/atoms/AmountLikeText";

import { useSelector } from "react-redux";

import * as S from "./styles";

export function AmountLike() {
  const likes = useSelector((state: RootState) => {
    return state.podcastLike.podcasts;
  });

  return (
    <S.Container>
      {likes.length > 0 && (
        <S.Content>
          <AmountLikeText amount={likes.length} />
        </S.Content>
      )}
      <HearthIcon />
    </S.Container>
  );
}
