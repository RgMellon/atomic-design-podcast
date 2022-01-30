import React from "react";

import { Categories } from "../../../components/organisms/Categories";
import { Header } from "../../../components/organisms/Header";
import { Podcast } from "../../../components/organisms/Podcast";

import * as S from "./styles";
import { FlatList } from "react-native";

const mock = [
  {
    id: 1,
    title: "F Your Purse",
    author: "The Read",
    episodeDuration: "14:20",
    image: "https://i.imgur.com/bX1E6GJ.png",
  },
  {
    id: 2,
    title: "Guilty Pleasures",
    author: "Homemade",
    episodeDuration: "15:40",
    image: "https://i.imgur.com/02JVYlf.png",
  },

  {
    id: 3,
    title: "F Your Purse",
    author: "Couples Therapy",
    episodeDuration: "1:20:17",
    image: "https://i.imgur.com/WkUHWrv.png",
  },

  {
    id: 4,
    title: "The 40-Year-Old Version",
    author: "Homemade",
    episodeDuration: "6:16",
    image: "https://i.imgur.com/5QK0pfX.png",
  },

  {
    id: 5,
    title: "Lindsey Vonn",
    author: "Wait Wait... Don't Tell Me!",
    episodeDuration: "50:44",
    image: "https://i.imgur.com/wQYHZv9.png",
  },
];

export function HomeTemplate() {
  return (
    <S.Container>
      <S.Header>
        <Header />
      </S.Header>

      <S.Categories>
        <Categories />
      </S.Categories>

      <S.Content>
        <FlatList
          data={mock}
          keyExtractor={(item) => String(item.episodeDuration)}
          renderItem={({ item: podcast }) => <Podcast data={podcast} />}
          showsVerticalScrollIndicator={false}
        />
      </S.Content>
    </S.Container>
  );
}
