const router = require('express').Router();
const { User, Character } = require('../../models');
const withAuth = require('../../utils/auth');
// this route checks for loggedIn status and renders the homepage
router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn,
  });
});
// this route listens for the /signup from the router and renders the signup page when called
router.get('/signup', async (req, res) => {
  res.render('signup');
});
// this route listens for the /login from the router and renders the login page when called
router.get('/login', async (req, res) => {
  res.render('login');
});
// this route listens for the /create from the router and renders the create page when called
router.get('/create', async (req, res) => {
  res.render('create');
});
// this route listens for the /game request and if the user is logged in it renders the game with the user data
router.get('/game', withAuth, async (req, res) => {
  if (req.session.loggedIn) {
    res.render('game', {
      userData: req.session.userData,
      loggedIn: req.session.loggedIn,
    });
  }
});
// when user is logged in this action will destroy the session and log the user out
router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
