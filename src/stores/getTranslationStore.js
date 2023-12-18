import { defineStore } from 'pinia'
import apiQuran from '@/api/api'

export const useTranslationStore = defineStore('translation', {
  state: () => ({
    ustazy: null,
  }),
  actions: {
    async getTranslation() {
      try {
        const res = await apiQuran.getTranslation()
        this.ustazy = res.data
      } catch (error) {
        console.error(error.message);
      }
    },
  }
})
