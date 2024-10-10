import axios from 'axios';

const GENDERIZE_API = 'https://api.genderize.io';
const RANDOM_USER_API = 'https://randomuser.me/api';

const getGender = async (name) => {
    try {
        const response = await axios.get(`${GENDERIZE_API}?name=${name}`);
        if (response.data.probability > 0.95) {
            return response.data.gender;
        }
        return 'undetermined';
    } catch (error) {
        console.error('Error fetching gender:', error);
        return 'undetermined';
    }
};

const getRandomUserData = async (gender) => {
    try {
        const response = await axios.get(`${RANDOM_USER_API}?gender=${gender}&results=1`);
        return response.data.results[0];
    } catch (error) {
        console.error('Error fetching random user data:', error);
        return null;
    }
};

export default {
    getGender,
    getRandomUserData
};
