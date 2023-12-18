import { defineStore } from 'pinia'
import apiQuran from '@/api/api'

export const useAyahStore = defineStore('ayah', {
  state: () => ({
    ayahs: null,
  }),
  actions: {
    async getAyah(surahAndAyah, edition) {
      try {
        const res = await apiQuran.getAyah(surahAndAyah, edition)
        this.ayahs = res.data
      } catch (error) {
        console.error(error.message);
      }
    }
  }
})
