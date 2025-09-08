import { create } from "zustand";
import { persist } from "zustand/middleware";

const authStore = (set) => ({
  token: null,
  addToken: (tkn) => {
    set(() => ({ token: tkn }));
  },
  removeToken: () => {
    set(() => ({ token: null }));
  },
});

const useAuthStore = create(persist(authStore, { name: "token" }));
export default useAuthStore;
