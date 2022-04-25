const router = require('express').Router();
const { get, create, update, remove } = require('../controllers/users');

router.get('/get', get);
router.post('/create', create);
router.put('/update', update);
router.delete('/remove', remove);

module.exports = router;