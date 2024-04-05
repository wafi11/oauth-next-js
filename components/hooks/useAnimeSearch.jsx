import { create } from "zustand";

export const useAnimeSearch = create((set) => ({
  anime: [],
  setAnime: (animek) => set({ anime: animek }),
}));
