var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('API is working properly and the monkey is in the house');
});

module.exports = router;