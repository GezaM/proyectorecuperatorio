module.exports = (sequelize, dataTypes) => {
    let alias = 'Actors'
    
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        favorite_movie_id : {
            type: dataTypes.INTEGER,
        },
        first_name: {
            type: dataTypes.STRING(100)
        }, 
        last_name: {
            type: dataTypes.STRING(100)
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
        tableName: 'Actors',
        timestamps: false
    }
    alias.associate = function () {
        alias.belongsTo(Movie, {
            as: "movie",
            foreignKey: "favorite_movie_id",
        })}
    alias.associate = function () {
        alias.hasMany(ActorMovie, {
            as: "actorMovie",
            foreignKey: "movie_id",
        })}
    alias.associate = function () {
        alias.hasMany(Actor, {
            as: "actor",
            foreignKey: "movie_id",
        })}

    const Actor = sequelize.define(alias,cols,config)
    
    return Actor
}
