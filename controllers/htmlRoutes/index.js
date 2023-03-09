const router = require('express').Router();

router.post('/signup', async (req, res) => {
    const newUserData = req.body;
    res.send(201).json({ message: "New user created!" })
})

router.get("/", async (req, res) => {
    res.render("home")
});

router.get("/signup", async (req, res) => {
    res.render('signup');
})

module.exports = router;
