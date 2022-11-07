import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const users = [];
const tweets = [];
let avatarAtual = "";

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  avatarAtual = avatar;
  users.push({ username, avatar });
  res.sendStatus(200);
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  tweets.push({ username, tweet, avatar: avatarAtual });
  res.sendStatus(200);
});

app.get("/tweets", (req, res) => {
  console.log(tweets);
  const lastTweets = [];
  for (let i = tweets.length - 1; i >= 0; i--) {
    if (lastTweets.length === 10) {
      return;
    }
    lastTweets.push(tweets[i]);
  }
  res.send(lastTweets);
});

app.listen(5000);
