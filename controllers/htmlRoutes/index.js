const router = require('express').Router();

router.get("/", async (req, res) => {
    res.render("home", { name: 'Alex' })
});

module.exports = router;
