
const  { Products, Users, Categories }  = require("../models");

let mainController = {
    seriesController: async function (req, res, next){
  
        let pList = await Products.findAll()
       
        res.render('index', { productList: pList })
    },
    metricsController: async function (req, res, next){
  
        let pList = await Products.findAll()
       
        res.render('index', { productList: pList })
    },
    lastmovieController: async function (req, res, next){
  
        let pList = await Products.findAll()
       
        res.render('index', { productList: pList })
    },
    
}

module.exports = mainController
