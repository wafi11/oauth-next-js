import { create } from "zustand";

export const useNavbar = create((set) => ({
  isOpen: false,
  OnOpen: (open) => set({ isOpen: open }),
  onClose: (open) => set({ isOpen: open }),
}));
