import db from '../config/firebase.js';
import apiService from './api.service.js';

const createUser = async (name, score) => {
    try {
        const gender = await apiService.getGender(name);
        const mockData = await apiService.getRandomUserData(gender !== 'undetermined' ? gender : 'male');
        const userData = {
            name,
            score,
            gender,
            age: mockData?.dob?.age,
            phone: mockData?.phone,
            email: mockData?.email,
            city: mockData?.location?.city,
            country: mockData?.location?.city,
            createdAt: new Date(),
        };

        const userRef = db.collection('users').doc();
        await userRef.set(userData);

        return userData;
    } catch (error) {
        console.error('Error creating user:', error.message);
        throw new Error('Failed to create user');
    }
};

const getLeaderboard = async () => {
    try {
        const usersSnapshot = await db.collection('users')
            .orderBy('score', 'desc')
            .get();

        const users = [];
        usersSnapshot.forEach(doc => users.push({ id: doc.id, ...doc.data() }));
        return users;
    } catch (error) {
        console.error('Error fetching leaderboard:', error.message);
        throw new Error('Failed to fetch leaderboard');
    }
};

export default {
    createUser,
    getLeaderboard,
};
