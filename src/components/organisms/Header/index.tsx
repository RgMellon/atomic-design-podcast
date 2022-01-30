import React from "react";
import { Welcome } from "../../../components/atoms/Welcome";
import { AmountLike } from "../../../components/molecules/AmountLikes";

export function Header() {
  return (
    <>
      <Welcome />
      <AmountLike />
    </>
  );
}
