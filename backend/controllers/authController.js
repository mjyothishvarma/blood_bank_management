const DonorRegDetails = require('../models/DonorRegDetails');
const bcrypt = require('bcrypt');

exports.registerDonor = async (req, res) => {
    const { name, email, password, bgroup } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newDonor = new DonorRegDetails({ name, email, password: hashedPassword, bgroup });
        await newDonor.save();
        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.loginDonor = async (req, res) => {
    const { name, password } = req.body;

    try {
        const donor = await DonorRegDetails.findOne({ name });
        if (!donor) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const match = await bcrypt.compare(password, donor.password);
        if (!match) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Successful login
        res.status(200).json({ message: 'Login successful', token: 'your_jwt_token' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
