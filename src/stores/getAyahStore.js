import { defineStore } from 'pinia'
import apiQuran from '@/api/api'

export const useAyahStore = defineStore('ayah', {
  state: () => ({
    ayah: null,
    surahAndAyahNumber: null,
  }),
  actions: {
    async getAyah(surahAndAyah) {
      try {
        const res = await apiQuran.getAyah(surahAndAyah)
        this.ayah = res.data
      } catch (error) {
        console.error(error.message);
      }
    }
  }
})
