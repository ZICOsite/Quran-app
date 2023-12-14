import axiosClient from "./axiosClient";

const apiQuran = {
    getSurah() {
        const url = "surah";
        return axiosClient.get(url)
    },
}

export default apiQuran