import apiQuran from "@/api/api";
import { defineStore } from "pinia";

export const useSajdasStore = defineStore("sajdas", {
  state: () => ({
    sajdas: null,
  }),
  actions: {
    async getSajdas() {
      try {
        const res = await apiQuran.getSajdas();
        this.sajdas = res.data
      } catch (error) {
        console.error(error.message);
      }
    },
  },
});
