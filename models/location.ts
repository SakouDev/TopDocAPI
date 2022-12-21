import { DataTypes, Model } from "sequelize"
import sequelize from '../database/sequelize'

export class Location extends Model{
    
    zipCode! : string;

    city! : string;

    address! : string;
    
}
    const concatRequiredMessage = (data: string) => {
        return `Le champ ${data} est requis`
    }
    Location.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('address') },
                notEmpty: { msg: concatRequiredMessage('address') }
            }
        },
        zipCode: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('zipCode') },
                notEmpty: { msg: concatRequiredMessage('zipCode') }
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('city') },
                notEmpty: { msg: concatRequiredMessage('city') }
            }
        }
    },
        {
            sequelize,
            timestamps: false
        })

