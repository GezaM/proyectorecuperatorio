module.exports = (sequelize, dataTypes) => {
    let alias = 'ActorEpisodes'

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        actor_id: {
            type: dataTypes.INTEGER
        },
        episode_id: {
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
        tableName: 'ActorEpisodes',
        timestamps: false
    }
    alias.associate = function () {
        alias.belongsTo(Actor, {
            as: "actors",
            foreignKey: "actor_id"
        })}
    alias.associate = function () {
        alias.belongsTo(Episode, {
            as: "episodes",
            foreignKey: "episode_id"
        })}

    const ActorEpisode = sequelize.define(alias,cols,config)
    
    return ActorEpisode
}
