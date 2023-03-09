const router = require('express').Router();

router.post('login', async (req, res) => {
    const newUserData = req.body;
    res.send(201).json({ message: "New user created!" })
})

// router.get("/", async (req, res) => {
//     res.render("home")
// });

// router.get("/login", async (req, res) => {
//     res.render('login');
// })

module.exports = router;
