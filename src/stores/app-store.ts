import { createStore } from 'zustand/vanilla';

export type AppState = {
  isLoading: boolean;
};

export type AppActions = {
  setIsLoading(isLoading: AppState['isLoading']): void;
};

export type AppStore = AppState & AppActions;

export const initAppStore = (): AppState => {
  return { isLoading: false };
};

export const defaultState: AppState = {
  isLoading: false,
};

export const createAppStore = (initState: AppState = defaultState) => {
  return createStore<AppStore>()(set => ({
    ...initState,
    setIsLoading: isLoading => set({ isLoading }),
  }));
};
