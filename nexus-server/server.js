const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const safeSpaceRouter = require("./routes/safeSpace")
const app = express();

app.use(cors());
app.use(express.json());
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter)
app.use('/safe-space', safeSpaceRouter)


app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}.`));