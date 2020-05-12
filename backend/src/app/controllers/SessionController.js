import mongoose from 'mongoose';

import User from '../models/User';

class SessionController {
    async store(req, res) {
        const { email } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }
    async index(req, res) {
        const user = await User.find().catch(err => {
            return res.status(500).json({ ERRO: err });
        });
        if (!user)
            return res.status(400).json({ erro: "Users not found!" });
        return res.json(user);
    }
}

export default new SessionController();