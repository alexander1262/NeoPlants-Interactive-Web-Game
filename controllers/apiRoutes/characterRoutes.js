const router = require('express').Router();
const { response } = require('express');
const { sequelize } = require('../../config/connection');
const { Character, User } = require('../../models');
const withAuth = require('../../utils/auth');
// when user is on the main page all character are loaded with their users
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
// when user clicks on an id the route finds any characters with the id that matches
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
// this route uses the id to find a character that matches that id and updates the database
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
// this route listens for the /create call an if the user is logged in it creates a character
router.post('/create', withAuth, async (req, res) => {
  try {
    const newChar = await Character.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log(newChar);
    return res.status(200).json(newChar);
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
