import { createContext, Dispatch, ReactNode, useReducer, useMemo } from 'react';
import {
  SignsActions,
  signsReducer,
  SignsState,
  initialState,
} from '../hooks/signsReducer';

type SignsContextProps = {
  state: SignsState;
  dispatch: Dispatch<SignsActions>;
};

type BudgetProviderProps = {
  children: ReactNode;
};

export const SignsContext = createContext<SignsContextProps>(null!);

export function SignsProvider({ children }: BudgetProviderProps) {
  const [state, dispatch] = useReducer(signsReducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <SignsContext.Provider value={contextValue}>
      {children}
    </SignsContext.Provider>
  );
}
