var express = require('express')
var router = express.Router()
const controller = require('../controllers/mainController')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' })
// })
router.get('/api/series', controller.seriesController)
router.get('/api/metrics', controller.metricsController)
router.get('/api/lastmovie', controller.lastmovieController)

module.exports = router
