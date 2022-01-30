import { combineReducers } from "redux";

import podcastLike from "../ducks/podcastLikes";

const rootReducer = combineReducers({
  podcastLike,
});

// export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
