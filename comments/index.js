const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || []; // Get existing comments

  comments.push({ id: commentId, content }); // Add new comment

  commentsByPostId[req.params.id] = comments; // Push new comments state

  res.status(201).send(res.body);
});

app.listen(4001, () => {
  console.log('Listening on port 4001');
});
