"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventTC = exports.Event = exports.EventSchema = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseTimestamp = require("mongoose-timestamp");

var _mongooseTimestamp2 = _interopRequireDefault(_mongooseTimestamp);

var _graphqlComposeMongoose = require("graphql-compose-mongoose");

var _point = require("./point");

var _service = require("./service");

var _timespan = require("./timespan");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EventSchema = exports.EventSchema = new _mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  location: _point.PointSchema,
  conferencingLink: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true,
    required: true
  },
  timeSpan: _timespan.TimeSpanSchema,
  service: _service.ServiceSchema
}, {
  collection: 'events'
});
EventSchema.plugin(_mongooseTimestamp2.default);
EventSchema.index({
  createdAt: 1,
  updatedAt: 1
});

const Event = exports.Event = _mongoose2.default.model('Event', EventSchema);

const EventTC = exports.EventTC = (0, _graphqlComposeMongoose.composeWithMongoose)(Event);