import { create } from "zustand";
import { persist } from "zustand/middleware";

const authStore = (set) => ({
  token: "",
  addToken: (tkn) => {
    set(() => ({ token: tkn }));
  },
  removeToken: () => {
    set(() => ({ token: "" }));
  },
});

const useAuthStore = create(persist(authStore, { name: "token" }));
export default useAuthStore;
