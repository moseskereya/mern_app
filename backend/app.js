const express = require('express');
const app = express();
const ConnectDB = require('./Config/db')
const cors = require('cors');
const students = require('./routes/api/students');
//bdconnect
ConnectDB();
app.use(cors({ origin: true, credentials: true }))
app.use(express.json({ extended: false }));
app.use('/api/students', students);
app.get('/', (req, res) => res.send("Hello from my app"));
const port = process.env.PORT || 8082
app.listen(port, () => console.log(`Server running on ${port}`));
