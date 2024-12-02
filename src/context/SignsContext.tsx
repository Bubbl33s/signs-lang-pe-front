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
  totalSigns: number;
};

type BudgetProviderProps = {
  children: ReactNode;
};

export const SignsContext = createContext<SignsContextProps>(null!);

export function SignsProvider({ children }: BudgetProviderProps) {
  const [state, dispatch] = useReducer(signsReducer, initialState);

  const totalSigns = useMemo(
    () => state.signsList.length || 0,
    [state.signsList]
  );

  return (
    <SignsContext.Provider value={{ state, dispatch, totalSigns }}>
      {children}
    </SignsContext.Provider>
  );
}
