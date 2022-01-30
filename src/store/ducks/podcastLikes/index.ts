import { Action } from "redux";
import { Props } from "../../../components/organisms/Podcast";

type PodcastState = {
  podcasts: Props[];
};

type ActionPodcast = {
  podcast: Props;
} & Action;

const INITIAL_STATE: PodcastState = {
  podcasts: [],
};

export default function podcastLikes(
  state = INITIAL_STATE,
  action: ActionPodcast
) {
  switch (action.type) {
    case "LIKE": {
      return { ...state, podcasts: [...state.podcasts, action.podcast] };
    }

    default:
      return state;
  }
}
