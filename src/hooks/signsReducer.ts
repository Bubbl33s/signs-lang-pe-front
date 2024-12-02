import { Label, Category } from '../types';

export type SignsActions =
  | {
      type: 'set-signs-list';
      payload: Label[];
    }
  | {
      type: 'set-categories';
      payload: Category[];
    }
  | {
      type: 'set-current-category';
      payload: Category | null;
    };

export type SignsState = {
  signsList: Label[];
  categories: Category[];
  currentCategory: Category;
};

export const initialState: SignsState = {
  signsList: [],
  categories: [],
  currentCategory: {} as Category,
};

export const signsReducer = (state: SignsState, action: SignsActions) => {
  if (action.type === 'set-signs-list') {
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

  if (action.type === 'set-current-category') {
    return {
      ...state,
      currentCategory: action.payload,
    };
  }

  return state;
};
