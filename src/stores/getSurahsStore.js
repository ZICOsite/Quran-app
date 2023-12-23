import { defineStore } from 'pinia'
import apiQuran from '@/api/api'

export const useSurahsStore = defineStore('surahs', {
  state: () => ({
    surahs: null,
  }),
  actions: {
    async getSurahs() {
      try {
        const res = await apiQuran.getSurah()
        this.surahs = res.data
      } catch (error) {
        console.error(error.message);
      }
    }
  }
})
