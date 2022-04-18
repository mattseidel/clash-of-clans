import { Params } from "../../interfaces/params";
import {
  FREQUENCY,
  GET_DATA,
  LOCATION,
  MAX_MEMBERS,
  MIN_CLAN_POINTS,
  MIN_MEMBERS,
  NEXT_PAGE,
  UPDATE_PARAMS,
} from "../types";

export const params = (data: Pick<Params, "warFrequency">) => {
  return {
    type: FREQUENCY,
    payload: {
      data,
    },
  };
};

export const location = (data: Pick<Params, "location">) => {
  return {
    type: LOCATION,
    payload: {
      data,
    },
  };
};

export const minMembers = (data: Pick<Params, "minMembers">) => {
  return {
    type: MIN_MEMBERS,
    payload: {
      data,
    },
  };
};

export const maxMembers = (data: Pick<Params, "maxMembers">) => {
  return {
    type: MAX_MEMBERS,
    payload: {
      data,
    },
  };
};

export const minClanPoints = (data: Pick<Params, "minClanPoints">) => {
  return {
    type: MIN_CLAN_POINTS,
    payload: {
      data,
    },
  };
};

export const nextPage = (data: Pick<Params, "after">) => {
  return {
    type: NEXT_PAGE,
    payload: {
      data,
    },
  };
}

export const updateParams = (data: Partial<Params>) => {

  return {
    type: UPDATE_PARAMS,
    payload: {
      data,
    },
  };
}

export const resetParams = () => {
  return {
    type: UPDATE_PARAMS,
    payload: {
      data: {
        name:"colombia",
        warFrequency: "Allways",
        location: "",
        minMembers: "0",
        maxMembers: "50",
        minClanPoints: "",
      },
    },
  };
}

export const getData = ():any => {
  return {
    type: GET_DATA,
  };
}