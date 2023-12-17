import axiosClient from "./axiosClient";

const apiQuran = {
    getSurah() {
        const url = "surah";
        return axiosClient.get(url)
    },
    getAyah(surahAndAyah) {
        const url = `ayah/${surahAndAyah}/ar.alafasy`
        return axiosClient.get(url)
    }
}

export default apiQuran