import React from "react";
import { FlatList } from "react-native";

import { Category } from "../../../components/molecules/Category";
import { Subtitle } from "../../../components/atoms/Subtitle";
import { Title } from "../../../components/atoms/Title";

import * as S from "./styles";

const mock = [
  {
    title: "Education",
    image: "https://i.imgur.com/Fp7AMxN.png",
    color: "#FF7449",
  },
  {
    title: "Vacation",
    image: "https://i.imgur.com/18JhOd1.png",
    color: "#67A4FF",
  },
  {
    title: "Games",
    image: "https://i.imgur.com/j99tEE6.png",
    color: "#FFA133",
  },
];

export function Categories() {
  return (
    <>
      <S.Header>
        <Title title="Category" />
        <Subtitle subtitle="See all" />
      </S.Header>

      <FlatList
        data={mock}
        keyExtractor={(item) => String(item.title)}
        renderItem={({ item: category }) => <Category data={category} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
}
