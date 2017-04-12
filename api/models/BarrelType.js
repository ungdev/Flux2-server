/**
 * BarrelType.js
 *
 * @description :: Represents a type of Barrel.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        // full name of the barrel's content (example: Chouffe)
        name: {
            type: "string",
            required: true,
            unique: true
        },

        // short name of the barrel's content (example: CH)
        shortName: {
            type: "string",
            required: true,
            unique: true
        },

        // quantity in liters (example: 25)
        liters: {
            type: "integer",
            required: true
        },

        // the price at which it must be sold
        sellPrice: {
            type: "float",
            required: true
        },

        // purchase price of the barrel
        supplierPrice: {
            type: "float",
            required: true
        }

    },

    fixtures: {
        beer1: {
            name: "Maredsous",
            shortName: "MA",
            liters: 30,
            supplierPrice: 123.00,
            sellPrice: 150.00
        },
        beer2: {
            name: "Ch'ti blonde",
            shortName: "CH",
            liters: 30,
            supplierPrice: 118.00,
            sellPrice: 145.00
        },
        beer3: {
            name: "Rince cochon",
            shortName: "RC",
            liters: 30,
            supplierPrice: 141.30,
            sellPrice: 155.00
        },
        beer4: {
            name: "Bière du corbeau",
            shortName: "CO",
            liters: 20,
            supplierPrice: 98.00,
            sellPrice: 110.00
        },
        beer5: {
            name: "Guiness",
            shortName: "GU",
            liters: 30,
            supplierPrice: 141.90,
            sellPrice: 152.00
        }
    }

};

