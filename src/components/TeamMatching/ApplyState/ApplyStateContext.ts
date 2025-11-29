import { createContext } from 'react';

interface ApplyStateContextValue {
  userType: string;
}

export const ApplyStateContext = createContext<ApplyStateContextValue | null>(null);
