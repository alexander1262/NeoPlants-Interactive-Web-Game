const router = require('express').Router();
const { User, Character } = require('../../models');
const withAuth = require('../../utils/auth');

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
router.get('/create', async (req, res) => {
  res.render('create');
});

router.get('/game', withAuth, async (req, res) => {
  console.log(req.session);
  // try {
  //   const newChar = await Character.create({
  //     include: [{ model: User, attributes: ['id', 'name'] }],
  //     ...req.body,
  //     user_id: req.session.id,
  //   });
  //   console.log(User);
  //   console.log(req.session);
  //   console.log(newChar);
  //   return res.status(200).json(newChar);
  // } catch (err) {
  //   return res.status(400).json(err);
  // }
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
