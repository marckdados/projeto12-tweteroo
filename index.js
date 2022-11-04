import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const users = [];
const tweets = [
  {
    username: "carlao",
    tweet: "vamo jogar fute ?",
  },
  {
    username: "carlao",
    tweet: "fino seniores",
  },
  {
    username: "joao da academia",
    tweet: "to sem braço boy, ta pago",
  },
];
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
  res.send(tweets);
});

app.listen(5000);
