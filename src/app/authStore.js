import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const authStore = (set) => ({
  token: "",
  addToken: (tkn) => {
    set(() => ({ token: tkn }));
  },
  removeToken: () => {
    set(() => ({ token: "" }));
  },
});

const useAuthStore = create(devtools(persist(authStore, { name: "token" })));
export default useAuthStore;
