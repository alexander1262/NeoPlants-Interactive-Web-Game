const router = require('express').Router();
const { sequelize } = require('../../config/connection');
const { Character, User } = require('../../models');

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
    const { id } = req.params;
    const increaseBy = 1;

    const character = await Character.findByPk(id);

    if (!character) {
      throw new Error('Character not found');
    }

    const newScore = character.charScore + increaseBy;

    const updated = await Character.update(
      { charScore: newScore },
      {
        where: {
          id,
        },
      }
    );
    if (updated) {
      const updatedChar = await Character.findOne({
        where: {
          id,
        },
      });
      return res.status(200).json({ character: updatedChar });
    }
    throw new Error('Character not updated');
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
