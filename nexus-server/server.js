const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const userQuizRouter = require("./routes/userQuiz");
const quizCompletionRouter = require("./routes/quizCompletion");
const logoutRouter = require("./routes/logout");
const safeSpaceRouter = require("./routes/safeSpace");
const checkListRouter = require("./routes/checkList");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/user", userQuizRouter);
app.use("/quiz-completion", quizCompletionRouter);
app.use("/logout", logoutRouter);
app.use("/safe-space", safeSpaceRouter);
app.use("/check-list", checkListRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}.`)
);
