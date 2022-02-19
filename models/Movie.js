module.exports = (sequelize, dataTypes) => {
    let alias = 'Movies'
    
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        genre_id : {
            type: dataTypes.INTEGER,
        },
        awards : {
            type: dataTypes.INTEGER,
        },
        length : {
            type: dataTypes.INTEGER,
        },
        title: {
            type: dataTypes.STRING(500)
        }, 
        release_date: {
            type: dataTypes.DATE
        },         
        rating: {
            type: dataTypes.FLOAT
        },         
        created_at:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updated_at:{
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }

    let config = {
        tableName: 'Movies',
        timestamps: false
    }
    alias.associate = function () {
        alias.belongsTo(Genre, {
            as: "Genre",
            foreignKey: "genre_id",
        })}
    alias.associate = function () {
        alias.hasMany(ActorMovie, {
            as: "ActorMovie",
            foreignKey: "movie_id",
        })}
    alias.associate = function () {
        alias.hasMany(Actor, {
            as: "Actor",
            foreignKey: "movie_id",
        })}

    const Movie = sequelize.define(alias,cols,config)
    
    return Movie
}
