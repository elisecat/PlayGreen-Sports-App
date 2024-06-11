import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "https://dff6kz4nmb.execute-api.us-east-1.amazonaws.com/development/test-front",
    headers: {
        'Content-Type': 'application/json',
    }
});

export default axiosClient;
