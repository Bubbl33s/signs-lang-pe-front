import { Label, Category } from '../types';

export type SignsActions =
  | {
      type: 'update-labels';
      payload: Label[];
    }
  | {
      type: 'set-categories';
      payload: Category[];
    };

export type SignsState = {
  signsList: Label[];
  categories: Category[];
};

export const initialState: SignsState = {
  signsList: [],
  categories: [],
};

export const signsReducer = (state: SignsState, action: SignsActions) => {
  if (action.type === 'update-labels') {
    return {
      ...state,
      signsList: action.payload,
    };
  }

  if (action.type === 'set-categories') {
    return {
      ...state,
      categories: action.payload,
    };
  }

  return state;
};
