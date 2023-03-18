const router = require('express').Router();
const { sequelize } = require('../../config/connection');
const { Character, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const charData = await Character.findAll({
      include: [{ model: User, attributes: ['id', 'name'] }],
    });
    console.log(charData.user);
    res.status(200).json(charData);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const charData = await Character.findByPk(req.params.id, {
      include: [{ model: User, attributes: ['id', 'name'] }],
    });

    if (!charData) {
      res.status(404).json({ message: 'No character with this id' });
      return;
    }
    return res.status(200).json(charData);
  } catch (err) {
    return res.status(500);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await Character.update(
      {
        charScore: req.body.charScore,
      },
      {
        where: {
          user_id: req.body.user_id,
        },
      }
    );
    return res.status(200).json(updated);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post('/signup', async (req, res) => {
  try {
    const newUser = await User.create({
      ...req.body,
    });
    req.session.save(() => {
      req.session.user_id = 2;
      req.session.loggedIn = true;
    });

    console.log(req.session.userData);
    return res.status(200).json(newUser);
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.post('/create', withAuth, async (req, res) => {
  try {
    const newChar = await Character.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log(newChar);
    console.log(req.session);
    return res.status(200).json(newChar);
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
