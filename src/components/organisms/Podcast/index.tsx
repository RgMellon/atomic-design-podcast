import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Title } from "../../../components/atoms/Title";
import { Subtitle } from "../../../components/atoms/Subtitle";
import { PodcastLogo } from "../../../components/atoms/Podcast/PodcastLogo";
import { ClockIcon } from "../../../components/atoms/ClockIcon";
import { HearthIcon } from "../../../components/atoms/HearthIcon";
import { LikeButton } from "../../../components/atoms/LikeButton";

import * as S from "./styles";

export type Props = {
  data: {
    id: number;
    title: string;
    author: string;
    episodeDuration: string;
    image: string;
  };
};

import { like } from "../../../store/ducks/podcastLikes/actions";
import { RootState } from "../../../store/index";

export function Podcast({ data }: Props) {
  const dispatch = useDispatch();

  const likes = useSelector((state: RootState) => {
    return state.podcastLike.podcasts;
  });

  function handleGiveLike(podcast: Props) {
    dispatch(like(podcast));
  }

  const isLiked = likes.find((podcast) => podcast.data.id == data.id);

  return (
    <S.Container>
      <PodcastLogo source={{ uri: data.image }} />

      <S.Wrapper>
        <Title title={data.title} />

        <S.Content>
          <Subtitle subtitle={data.author} />

          <S.DurationArea>
            <ClockIcon />
            <Subtitle subtitle={data.episodeDuration} />
          </S.DurationArea>
        </S.Content>
      </S.Wrapper>
      <LikeButton
        onPress={() => {
          handleGiveLike({ data });
        }}
      >
        <HearthIcon isLiked={!!isLiked} />
      </LikeButton>
    </S.Container>
  );
}
