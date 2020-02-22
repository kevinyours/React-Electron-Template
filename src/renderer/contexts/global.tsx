import { createContext, useContext } from 'react';
import { Store } from '../stores';

export const StoreContext = createContext<Store>({} as Store);
export const StoreProvider = StoreContext.Provider;
export const useStore = (): Store => useContext(StoreContext);
