module.exports = (sequelize, dataTypes) => {
    let alias = 'Genres'

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100)
        }, 
        ranking: {
            type: dataTypes.INTEGER
        },         
        active: {
            type: dataTypes.BOOLEAN
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
        tableName: 'Genres',
        timestamps: false
    }
    alias.associate = function () {
        alias.hasMany(Movie, {
            as: "movie",
            foreignKey: "genre_id",
        })}
    alias.associate = function () {
        alias.hasMany(Serie, {
            as: "serie",
            foreignKey: "genre_id",
        })}

    const Genre = sequelize.define(alias,cols,config)
    
    return Genre
}
