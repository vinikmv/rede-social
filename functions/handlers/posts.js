const { db } = require("../util/admin");

exports.getAllPosts = (req, res) => {
  db.collection("posts")
    .orderBy("createdAt", "desc")
    .get()
    .then((data) => {
      let posts = [];
      data.forEach((doc) => {
        posts.push({
          postId: doc.id,
          commentCount: doc.data().commentCount,
          likeCount: doc.data().likeCount,
          ...doc.data(),
        });
      });
      return res.json(posts);
    })
    .catch((err) => console.error(err));
};

exports.criarUmNovoPost = (req, res) => {
  const newPost = {
    body: req.body.body,
    userHandle: req.user.handle,
    createdAt: new Date().toISOString(),
  };

  db.collection("posts")
    .add(newPost)
    .then((doc) => {
      res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch((err) => {
      res.status(500).json({ error: "Something went wrong" });
      console.log(err);
    });
};
