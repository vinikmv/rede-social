const functions = require("firebase-functions");

const { getAllPosts, criarUmNovoPost } = require("./handlers/posts");
const {
  signUp,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser,
} = require("./handlers/users");

const fbAuth = require("./util/fbAuth");

const express = require("express");
const app = express();

// Posts Route
app.get("/posts", getAllPosts);
app.post("/posts", fbAuth, criarUmNovoPost);

//Users Route
app.post("/signup", signUp);
app.post("/login", login);
app.post("/user/image", fbAuth, uploadImage);
app.post("/user", fbAuth, addUserDetails);
app.get("/user", fbAuth, getAuthenticatedUser);

exports.api = functions.https.onRequest(app);
