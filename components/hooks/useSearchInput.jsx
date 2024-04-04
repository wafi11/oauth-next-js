import axios from "axios";
import { create } from "zustand";

export const useSearch = create((set, get) => ({
  movie: [],
  fetchMovie: async (query) => {
    const response = await axios(`https://api.jikan.moe/v4/anime?${query}`);
    const result = response.data;
    return set({ movie: result });
  },
}));
