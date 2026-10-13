import { create } from "zustand";

type AuthModalStore = {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;

  openLogin: () => void;
  closeLogin: () => void;

  openRegister: () => void;
  closeRegister: () => void;
};

export const useAuthModal = create<AuthModalStore>((set) => ({
  isLoginOpen: false,
  isRegisterOpen: false,

  openLogin: () => set({ isLoginOpen: true, isRegisterOpen: false }),
  closeLogin: () => set({ isLoginOpen: false }),

  openRegister: () => set({ isRegisterOpen: true, isLoginOpen: false }),
  closeRegister: () => set({ isRegisterOpen: false }),
}));