module.exports = (sequelize, dataTypes) => {
    let alias = 'ActorMovies'

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        actor_id: {
            type: dataTypes.INTEGER
        },
        movie_id: {
            type: dataTypes.INTEGER
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
        tableName: 'ActorMovies',
        timestamps: false
    }
    alias.associate = function () {
        alias.belongsTo(Actor, {
            as: "actors",
            foreignKey: "actor_id"
        })}
    alias.associate = function () {
        alias.belongsTo(Movie, {
            as: "movies",
            foreignKey: "movie_id"
        })}

    const ActorMovie = sequelize.define(alias,cols,config)
    
    return ActorMovie
}
