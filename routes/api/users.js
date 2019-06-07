const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../../models/User');
// User.db.dropCollection('users');
const keys = require('../../config/keys');
//  $router   GET api/users/test
//  @desc     返回请求的数据
//  @access   public
// router.get('/tset', (req, res) => {
//   res.json({
//     msg: 'hello'
//   });
// });

// @route  POST api/users/register
// @desc   返回的请求的json数据
// @access public
router.post('/register', (req, res) => {
  // 查询数据库中是否拥有邮箱
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({
        msg: '邮箱已被注册'
      });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        avatar,
        password: req.body.password,
        identity: req.body.identity
      });

      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;

          newUser.password = hash;

          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route  POST api/users/login
// @desc   返回token jwt passport
// @access public

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // 查询数据库
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({
        msg: '用户名不存在'
      });
    }

    // 密码匹配

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const rule = {
          id: user.id,
          username: user.username,
          avatar: user.avatar,
          identity: user.identity
        };
        jwt.sign(rule, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          if (err) throw err;
          res.json({
            success: true,
            token: 'Bearer ' + token,
			avatar: user.avatar
          });
        });
      } else {
        return res.status(400).json({
          msg: '密码无效'
        });
      }
    });
  });
});

// @route  POST api/users/current
// @desc   return current user
// @access Private

router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      username: req.user.username,
      email: req.user.email,
      identity: req.user.identity
    });
  }
);
module.exports = router;
