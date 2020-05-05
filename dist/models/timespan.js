"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeSpanSchema = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TimeSpanSchema = exports.TimeSpanSchema = new _mongoose.Schema({
  startsAt: {
    type: Date,
    required: true
  },
  endsAt: {
    type: Date,
    required: true
  }
});