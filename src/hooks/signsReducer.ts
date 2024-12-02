export type SignsActions = {
  type: 'get-signs';
};

export type SignsState = {
  signs: any;
};

export const initialState: SignsState = {
  signs: [],
};

export const signsReducer = (state: SignsState, action: SignsActions) => {
  if (action.type === 'get-signs') {
    return {
      ...state,
      signs: ['a'],
    };
  }

  return state;
};
