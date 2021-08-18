const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = 7000;

connectDB();

app.use(express.json());

// Enable cors
app.use(cors());

// Mount Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/project'));
app.use('/api/tasks', require('./routes/tasks'));

// Set react as static folder
app.use(express.static('client/build'));
app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
}); 


app.listen(PORT, console.log('Server running on ' + PORT));