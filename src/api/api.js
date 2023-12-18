import axiosClient from "./axiosClient";

const apiQuran = {
    getSurah() {
        const url = "surah";
        return axiosClient.get(url)
    },
    getAyah(surahAndAyah, edition) {
        const url = `ayah/${surahAndAyah}/editions/${edition}`
        return axiosClient.get(url)
    },
    getTranslation() {
        const url = `edition/type/translation`
        return axiosClient.get(url)
    }
}

export default apiQuran