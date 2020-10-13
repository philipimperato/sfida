const { Service } = require('feathers-sequelize');

exports.Users = class Users extends Service {   
    create (data, params) {
        return super.create(data, params);
    }
};
