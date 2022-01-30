import { Action } from "redux";
import { Props } from "../../../components/organisms/Podcast";

export type LikeAction = {
  type: string;
  podcast: Props;
} & Action;

export function like(podcast: Props): LikeAction {
  return {
    type: "LIKE",
    podcast: podcast,
  };
}
