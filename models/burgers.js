// module.exports = function(sequelize, DataTypes) {
//   var Burger = sequelize.define("burgers", {
//     burger_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1, 40],
//         notContains: "murder"
//       }
//     },
//     devoured: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false
//     }
//   });
//   return Burger;
// };

module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        },
        customer_name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 20]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burger;
};
