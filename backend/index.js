//StAuth10244: I Seo James, 000872976 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const sqlite3 = require("sqlite3").verbose();
const sqlite = require("sqlite");
const redis = require("redis");

app.use(express.json());

async function initialize() {
  const db = await sqlite.open({
    filename: "database.db",
    driver: sqlite3.Database,
  });
  await db.run(
    "CREATE TABLE IF NOT EXISTS  User (username TEXT, password TEXT)"
  );

  client = redis.createClient({
    url: "redis://redis-18566.c281.us-east-1-2.ec2.cloud.redislabs.com:18566",
    password: "OGxUDq6NXnAiVhYLtL1jwhvCNQyCUUyv",
  });

  client.connect();

  client.on("error", function (err) {
    console.log("Error: " + err);
  });

  app.post("/login", async function (req, res) {
    const body = req.body;
    const username = body.username;
    const password = body.password;

    try {
      const checkPassword = await db.get(
        "SELECT password FROM User WHERE username = ?",
        username
      );
      if (checkPassword.password != password) {
        res.json({ status: "failure" });
      } else {
        res.json({ status: "success" });
      }
    } catch (e) {
      res.json({ status: "failure" });
    }
  });

  app.post("/signup", async function (req, res) {
    const body = req.body;
    const username = body.username;
    const password = body.password;
    try {
      const stmt = await db.prepare(
        "INSERT INTO USER (username,password) VALUES (?,?)"
      );
      await stmt.run([username, password]);
      res.json({ status: "success" });
    } catch (e) {
      res.json({ status: "failure" });
    }
  });

  app.post("/update", async function (req, res) {
    const body = req.body;
    const username = body.username;
    const result = body.result;
    try {
      if (result === "correct") {
        await client.lPush("leaders",[username]);
      }
      const leaders = await client.lRange("leaders", 0, 9)
      res.json({ leaders: leaders });
    } catch (e) {}
  });

  server.listen(3000, () => {
    console.log("listening on port:3000");
  });
}

initialize();
