const router = require('express').Router();
const { User, Character } = require('../../models');
// listens for signup and creates a user when called
router.post('/signup', async (req, res) => {
  console.log(req.body);
  try {
    const userData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(userData);
    const plainUser = userData.get({ plain: true });
    console.log(plainUser);
    // saves the user data and puts it in the session data
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      return res.status(200).json(plainUser);
    });
  } catch (err) {
    return res.status(400).json(err);
  }
});
// listens for login and finds the user to allow the user to login
router.post('/login', async (req, res) => {
  console.log(req.body);
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!userData) {
      console.log(userData);
      return res.status(400).json({
        message: 'Incorrect email or password. Please try again',
      });
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      return res.status(400).json({
        message: 'Incorrect email or password. Please try again',
      });
    }
    req.session.save(() => {
      req.session.userData = userData;
      req.session.loggedIn = true;
      console.log(userData);
      return res.send({
        user: userData,
        message: 'You are now logged in',
      });
    });
  } catch (err) {
    return res.status(400).json(err);
  }
});
// listens for user to click logout and destroys sessions if user is logged in
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(404).end();
    });
  }
});

module.exports = router;
