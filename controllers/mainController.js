
const  { Serie, Genre, Movie }  = require("../models");

let mainController = {
    seriesController: async function (req, res, next){
  
        let series = await Serie.findAll({ include: [{ model: Genre }] })
       
        const response = {
            metadata: {
                total: series.length,
                status: 200
            },
            data: series.map(serie => {
                return {
                    id: serie.id,
                    title: serie.title,
                    genreTitle: serie.genre.name
                }
            })
        }   
        res.status(200).json(response)
    },
    metricsController: async function (req, res, next){
  
        const amountSeries = await Serie.count()
        const amountMovies = await Movie.count()
        const moviesTotalLength = await Movie.sum('length')
       
        const response = {
            metadata: {
                total: 3,
                status: 200
            },
            data: {
                amountSeries,
                amountMovies,
                moviesTotalLength
            }
        }
        res.status(200).json(response)
    },
    lastmovieController: async function (req, res, next){
  
        const lastMovie = await Movie.findOne({
            order: [['id', 'DESC']],
            include: [{ model: Genre }]
        })

       const response = {
            metadata: {
                total: 1,
                status: 200
            },
            data: {
                name: lastMovie.title,
                genre: lastMovie.genre.name,
                awards: lastMovie.awards,
                image: lastMovie.image || ''
            }
       }

        res.status(200).json(response)
    }
}

module.exports = mainController
