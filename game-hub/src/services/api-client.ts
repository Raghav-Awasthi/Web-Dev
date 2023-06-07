import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd7c586450d5d4d67a420c054012ac243',
    }
})