import apiQuran from "@/api/api";
import { defineStore } from "pinia";

export const useJuzStore = defineStore("juz", {
  state: () => ({
    juz: null,
  }),
  actions: {
    async getJuz(id) {
      try {
        const res = await apiQuran.getJuz(id);
        this.juz = res.data
      } catch (error) {
        console.error(error.message);
      }
    },
  },
});
