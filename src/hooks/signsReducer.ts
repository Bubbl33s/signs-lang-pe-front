export type SignsActions = {
  type: 'update-labels';
  payload: any[];
};

export type SignsState = {
  signsList: any;
};

export const initialState: SignsState = {
  signsList: [],
};

export const signsReducer = (state: SignsState, action: SignsActions) => {
  if (action.type === 'update-labels') {
    return {
      ...state,
      signsList: action.payload,
    };
  }

  return state;
};
