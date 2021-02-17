import * as AT from "../action.types";

const INITIAL_STATE = {
  searchInput: "",
  inboxMessages: [
    {
      creationTime: Date(),
      creator: "barak",
      subject: "test subject",
      icon: "im an icon",
      content:
        "Aliquam facilisis felis a nibh fermentum, ut rutrum nisi mattis. Proin euismod eget augue vel dignissim. Aliquam vehicula nunc efficitur lacus laoreet, non mattis enim rhoncus. Aliquam sed massa non metus consectetur varius sit amet vitae orci. Ut egestas felis quis quam vulputate, et pellentesque lectus accumsan. ",
    },
    {
      creationTime: Date(),
      creator: "dimand",
      subject: "test subject 1",
      icon: "im an icon",
      content:
        "Aliquam facilisis felis a nibh fermentum, ut rutrum nisi mattis. Proin euismod eget augue vel dignissim. Aliquam vehicula nunc efficitur lacus laoreet, non mattis enim rhoncus. Aliquam sed massa non metus consectetur varius sit amet vitae orci. Ut egestas felis quis quam vulputate, et pellentesque lectus accumsan. ",
    },
  ],
};

let id = 1;
const mockMessage = {
  id: id++,
  content: "test content",
};

const inboxReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AT.ADD_MESSAGE:
      // return [...state, action.payload];
      return {
        ...state,
        inboxMessages: [...state.inboxMessages, action.payload],
      };

    case AT.CACHE_INBOX_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload,
      };
  }
  return state;
};

export default inboxReducer;
