import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Auth = {
  accessToken: string;
  refreshToken: string;
};

type UseStore = {
  auth?: Auth;
  login: (auth: Auth) => void;
};

export const useAppStore = create(
  persist<UseStore>(
    (set) => ({
      auth: undefined,
      login: (auth) => set({ auth }),
      logout: () => set({ auth: undefined }),
    }),
    {
      name: "sanaap-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);


export const getSanaapToken = () => {
  return useAppStore.getState().auth?.accessToken;
};
export const getSanaapRefreshToken = () => {
  return useAppStore.getState().auth?.accessToken;
};

export const isLoggedIn = () => {
  return !!useAppStore.getState().auth?.accessToken;
};

export const isSanaapLoggedIn = () => {
  return !!useAppStore.getState().auth?.accessToken;
};
