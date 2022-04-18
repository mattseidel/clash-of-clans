import { Params } from "../../interfaces/params";

interface initialStateParams extends Params {
  isNew: boolean;
}

const initialState: initialStateParams = {
  name: "Colombia",
  warFrequency: "always",
  location: "",
  minMembers: 0,
  maxMembers: 50,
  minClanPoints: 0,
  limit: 24,
  after: "",
  before: "",
  labelIds: "",
  isNew: true,
};

export default (state = initialState, action: any): Params => {
  switch (action.type) {
    case "FREQUENCY":
      return {
        ...state,
        ...action.payload.data,
        isNew: true
      };
    case "LOCATION":
      return {
        ...state,
        ...action.payload.data,
        isNew: true
      };
    case "MIN_MEMBERS":
      return {
        ...state,
        ...action.payload.data,
        isNew: true
      };
    case "MAX_MEMBERS":
      return {
        ...state,
        ...action.payload.data,
        isNew: true
      };
    case "MIN_CLAN_POINTS":
      return {
        ...state,
        ...action.payload.data,
        isNew: true
      };
    case "UPDATE_PARAMS":
      return {
        ...state,
        ...action.payload.data,
        isNew: true
      };
    case "NEXT_PAGE":
      return {
        ...state,
        ...action.payload.data,
        isNew: false
      };

    default:
      return state;
  }
};
