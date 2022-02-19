const ActorEpisode = require("./ActorEpisode")

module.exports = (sequelize, dataTypes) => {
    let alias = 'Episodes'

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING(100)
        }, 
        number: {
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
        },
        release_date: {
            type: Sequelize.DATE 
        },
        rating:{
            type: dataTypes.DECIMAL,
        },
        season_id : {
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName: 'Episodes',
        timestamps: false
    }
    alias.associate = function () {
        alias.belongsTo( Seasons, {
            as: "Seasons",
            foreignKey: "season_id"
        })}
    alias.associate = function () {
        alias.hasMany(ActorEpisode, {
            as: "ActorEpisode",
            foreignKey: "episode_id",
        })}

    const Episode = sequelize.define(alias,cols,config)
    
    return Episode
}
