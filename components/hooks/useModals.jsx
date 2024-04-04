import { create } from "zustand";

export const useModalVideo = create((set) => ({
  isOpen: false,
  OnOpen: (open) => set({ isOpen: true }),
  onClose: (open) => set({ isOpen: open }),
}));
