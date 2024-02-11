import axiosClient from "./axiosClient";

const apiQuran = {
  getSurah() {
    const url = "surah";
    return axiosClient.get(url);
  },
  getSurahSingle(id, edition, offset, limit) {
    const url = `surah/${id}/editions/${edition}?offset=${offset}&limit=${limit}`;
    return axiosClient.get(url);
  },
  getAyah(surahAndAyah, edition) {
    const url = `ayah/${surahAndAyah}/editions/${edition}`;
    return axiosClient.get(url);
  },
  getTranslation() {
    const url = `edition/type/translation`;
    return axiosClient.get(url);
  },
  getJuz(id) {
    const url = `juz/${id}/ar.alafasy`;
    return axiosClient.get(url);
  },
  getSajdas() {
    const url = `sajda/ar.alafasy`;
    return axiosClient.get(url);
  }
};

export default apiQuran;
