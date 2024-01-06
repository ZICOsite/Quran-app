import { defineStore } from 'pinia'
import apiQuran from '@/api/api'

export const useSurahsStore = defineStore('surahs', {
  state: () => ({
    surahs: null,
    surah: null,
  }),
  getters: {
    getFirstSurahData(state) {
      return state.surah?.[0]
    }
  },
  actions: {
    async getSurahs() {
      try {
        const res = await apiQuran.getSurah()
        this.surahs = res.data
      } catch (error) {
        console.error(error.message);
      }
    },
    async getSurahSingle(id, edition = 'ar.alafasy', offset = 0, limit = 20) {
      try {
        const res = await apiQuran.getSurahSingle(id, edition, offset, limit)
        this.surah = res.data
      } catch (error) {
        console.error(error.message);
      }
    },
  }
})
