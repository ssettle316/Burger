var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("burger", name, function(res) {
      cb(res);
    }); 
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burger", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
