import { create } from "zustand";
import { persist } from "zustand/middleware";

const authStore = (set) => ({
  token: null,
  setToken: (tkn) => {
    set(() => ({ token: tkn }));
  },
  deleteToken: () => {
    set(() => ({ token: null }));
  },
});

const useAuthStore = create(persist(authStore, { name: "token" }));
export default useAuthStore;
