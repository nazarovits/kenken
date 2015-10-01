var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.sendfile('index.html');
});

router.get('/testError', function (req, res, next) {
    if (req.query.err) {
        throw new Error(req.query.err);
    } else {
        res.send('all right');
    }
});

module.exports = router;
