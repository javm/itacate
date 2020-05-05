"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceTC = exports.Service = exports.ServiceSchema = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseTimestamp = require("mongoose-timestamp");

var _mongooseTimestamp2 = _interopRequireDefault(_mongooseTimestamp);

var _graphqlComposeMongoose = require("graphql-compose-mongoose");

var _user = require("./user");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ServiceSchema = exports.ServiceSchema = new _mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  provider: _user.UserSchema,
  consumer: _user.UserSchema,
  schemaType: {
    type: String,
    enum: ['class', 'service'],
    default: 'class'
  }
}, {
  collection: 'services'
});
ServiceSchema.plugin(_mongooseTimestamp2.default);
ServiceSchema.index({
  createdAt: 1,
  updatedAt: 1
});

const Service = exports.Service = _mongoose2.default.model('Service', ServiceSchema);

const ServiceTC = exports.ServiceTC = (0, _graphqlComposeMongoose.composeWithMongoose)(Service);