const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();


const questionsRoutes = require('./routes/questions-routes');
const conclusionsRoutes = require('./routes/conclusions-routes');
const app = express();


app.use(cors());
app.use(express.json());
app.use('/api/questions', questionsRoutes);
app.use('/api/conclusions', conclusionsRoutes);

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}.`));