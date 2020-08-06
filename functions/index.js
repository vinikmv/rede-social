const functions = require("firebase-functions");

const { getAllPosts, criarUmNovoPost } = require("./handlers/posts");
const { signUp, login } = require("./handlers/users");

const fbAuth = require("./util/fbAuth");

const express = require("express");
const app = express();

// Posts Route
app.get("/posts", getAllPosts);
app.post("/posts", fbAuth, criarUmNovoPost);

//Users Route
app.post("/signup", signUp);
app.post("/login", login);

exports.api = functions.https.onRequest(app);
