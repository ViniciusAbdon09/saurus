import axios from "axios";

const BASE_URL = 'https://apisaurussegmentos.azurewebsites.net/api';

const Api = {
    getSegments: async (segment) => {
        const response = await axios.get(`${BASE_URL}/segmentos?page=1&Descricao=${segment}&TemFiltro=true`);
        
        return response.data.list;
    }
}

export {Api}