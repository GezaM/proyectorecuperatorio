module.exports = (sequelize, dataTypes) => {
    let alias = 'Seasons'
    
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        serie_id : {
            type: dataTypes.INTEGER,
        },
        number : {
            type: dataTypes.INTEGER,
        },
        title: {
            type: dataTypes.STRING(500)
        },
        release_date: {
            type: dataTypes.DATE
        },
        end_date: {
            type: dataTypes.DATE
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
        tableName: 'Seasons',
        timestamps: false
    }
    alias.associate = function () {
        alias.belongsTo(Serie, {
            as: "serie",
            foreignKey: "serie_id",
        })}
    alias.associate = function () {
        alias.hasMany(Episode, {
            as: "episodes",
            foreignKey: "season_id",
        })}

    const Season = sequelize.define(alias,cols,config)
    
    return Season
}
