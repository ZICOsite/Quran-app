import { defineStore } from "pinia";
import apiQuran from "@/api/api";

export const useAyahStore = defineStore("ayah", {
  state: () => ({
    ayahs: null,
  }),
  getters: {
    getFirstAyahData(state) {
      return state.ayahs?.[0];
    },
  },
  actions: {
    async getAyah(surahAndAyah, edition = "ar.alafasy") {
      try {
        const res = await apiQuran.getAyah(surahAndAyah, edition);
        this.ayahs = res.data;
      } catch (error) {
        window.location = "/error"
        console.error(error.message);
      }
    },
  },
});
