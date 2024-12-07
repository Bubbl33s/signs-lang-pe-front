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
  currentCategory: Category | null;
};

export const initialState: SignsState = {
  signsList: JSON.parse(localStorage.getItem('signsList') || '[]'),
  categories: [],
  currentCategory: null,
};

export const signsReducer = (state: SignsState, action: SignsActions) => {
  if (action.type === 'set-signs-list') {
    const MAX_SIGNS_LIST_SIZE = 30;
    const limitedSignsList = action.payload.slice(0, MAX_SIGNS_LIST_SIZE);

    localStorage.setItem('signsList', JSON.stringify(limitedSignsList));

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
