const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

router.post('/register', async (req, res) => {
    console.log('➡️ REGISTER ROUTE HIT:', req.body);
    const { email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        console.log('🚫 Email already in use');
        return res.status(400).json({ message: 'Email already in use' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();
      console.log('✅ User created:', newUser.email);
  
      const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: '7d' });
      res.status(201).json({ token, email: newUser.email });
    } catch (err) {
      console.error('❌ Registration error:', err);
      res.status(500).json({ message: 'Registration failed' });
    }
  });

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne ({ email });
        if (!user) return res.status(400).json({  message: 'Invalid email or password' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });
        res.status(200).json({ token, email: user.email });
    } catch (err) {
        res.status(500).json({ message: 'Login failed' });
    }
});

router.get('/test', (req, res) => {
  res.send('✅ Auth route working');
});

module.exports = router;