import UserService from "../services/user.service.js"


const createUser = async (req, res) => {
    const { name, score } = req.body;

    if (!name || !score) {
        return res.status(400).send({ error: 'Name and score are required' });
    }

    try {
        const user = await UserService.createUser(name, score);
        res.status(201).send({ message: 'User data submitted and enriched successfully', user });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send({ error: 'Failed to submit user data' });
    }
};

const getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await UserService.getLeaderboard();
        res.status(200).send(leaderboard);
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        res.status(500).send({ error: 'Failed to fetch leaderboard' });
    }
};

export default {
    createUser,
    getLeaderboard,
};

