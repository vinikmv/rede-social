const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(require("../../firebase-admin-key.json")),
  storageBucket: "social-project-8ac3b.appspot.com",
});

const db = admin.firestore();

module.exports = { admin, db };
