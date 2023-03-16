const { User, Character } = require('../../models');

const router = require('express').Router();

// router.post('/signup', async (req, res) => {
//   const newUserData = req.body;
//   res.send(201).json({ message: 'New user created!' });
// });

router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/signup', async (req, res) => {
  res.render('signup');
});

router.get('/login', async (req, res) => {
  res.render('login');
});

router.get('/game', async (req, res) => {
  console.log(req.session);
  if (req.session.loggedIn) {
    res.render('game', {
      userData: req.session.userData,
      loggedIn: req.session.loggedIn,
    });
  }
});

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
