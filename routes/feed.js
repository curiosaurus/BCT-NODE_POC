const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /feed/posts
router.get('/getfeeds', feedController.getFeeds);

// POST /feed/post/:postId
router.get('/getfeed/:feedId', feedController.getFeed);

// POST /feed/post
router.post(
  '/post',
  isAuth,
  [
    body('title')
      .trim()
      .isLength({ min: 5 }),
    body('description')
      .trim()
      .isLength({ min: 5 })
  ],
  feedController.testAddProduct
);

module.exports = router;
