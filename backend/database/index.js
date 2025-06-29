// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const { Pool } = require('pg');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // PostgreSQL connection
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'sportsappdb',   
//   password: '1234', 
//   port: 5432,
// });

// app.post('/api/signup', async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
//     if (existingUser.rows.length > 0) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     await pool.query(
//       'INSERT INTO users (email, password) VALUES ($1, $2)',
//       [email, password]
//     );

//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });


// // Login route
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const result = await pool.query(
//       'SELECT * FROM users WHERE email = $1',
//       [email]
//     );
//     if (result.rows.length === 0) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }
//     const user = result.rows[0];
//     const match = await bcrypt.compare(password, user.password);
//     if (!match) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     // Create token
//     const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
//     res.json({ token });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Error logging in' });
//   }
// });

// app.listen(5000, () => {
//   console.log('Server running on http://localhost:5000');
// });


import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config();

export const sequelize = new Sequelize(
  process.env.Postgres,
  process.env.sportsappdb,
  process.env["1234"],
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',// other example mysql,oracle,h2
  }
);

export const db = () => {
  try {
    sequelize.sync({alter:true})
    console.log("database connected successfully")

  } catch (e) {
    console.error("fail to connect database successfully",e)
  }
}



