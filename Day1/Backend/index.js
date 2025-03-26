
import express from 'express'

import dotenv from 'dotenv';

import DbConnect from './DbConnect.js'

import User from './models/models.js';


dotenv.config();


const app = express();

// parsing json body
app.use(express.json());

const PORT = process.env.PORT || 5000;
DbConnect();

// creating route for data insertion

app.post('/adduser', async (req, res) => {
  //destructureing  data form request
  const { name, email, password, number, add } = req.body;

  // check the condition all data have or not

  if (!name || !email || !password || !number) {
    return res.status(401).json({
      massage: 'Please fill all the details'
    })
  }

  try {
    const { name, email, password, number, add } = req.body;


    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }


    const newUser = new User({ name, email, password, number, add });
    await newUser.save();

    return res.status(201).json({ message: 'User created successfully', user: newUser });
  }

  catch (error) {
    return res.status(400).json({ message: 'Error creating user', error: error.message });
  }




})


app.listen(PORT, () => {
  console.log(`Server start ${PORT}`);
})