import axios from 'axios';

const baseURL = "https://dff6kz4nmb.execute-api.us-east-1.amazonaws.com/development/test-front";

const sportService = {
    fetchSports: async () => {
        try {
            const response = await axios.get(baseURL);
            if (Array.isArray(response.data.sports)) {
                return response.data.sports
            }
            throw new Error('Data is not an array!');
        } catch (error) {
            throw error;
        }
    }
};

export default sportService;
