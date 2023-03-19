const router = require('express').Router();
const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('./apiRoutes');
// use router.use to put html and api routes in
router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;
