import apiQuran from "@/api/api";
import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  state: () => ({
    search: null,
    count: null,
    keyword: null,
  }),
  actions: {
    async getSearch(keyword) {
      try {
        const res = await apiQuran.getSearch(keyword);
        this.search = res.data.matches;
        this.count = res.data.count;
        this.keyword = keyword;
      } catch (error) {
        console.error(error.message);
      }
    },
  },
  persist: true
});
