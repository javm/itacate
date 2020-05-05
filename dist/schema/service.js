"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceMutation = exports.ServiceQuery = undefined;

var _service = require("../models/service");

const ServiceQuery = {
  serviceById: _service.ServiceTC.getResolver('findById'),
  serviceByIds: _service.ServiceTC.getResolver('findByIds'),
  serviceOne: _service.ServiceTC.getResolver('findOne'),
  serviceMany: _service.ServiceTC.getResolver('findMany'),
  serviceCount: _service.ServiceTC.getResolver('count'),
  serviceConnection: _service.ServiceTC.getResolver('connection'),
  servicePagination: _service.ServiceTC.getResolver('pagination')
};
const ServiceMutation = {
  serviceCreateOne: _service.ServiceTC.getResolver('createOne'),
  serviceCreateMany: _service.ServiceTC.getResolver('createMany'),
  serviceUpadateById: _service.ServiceTC.getResolver('updateById'),
  serviceUpdateOne: _service.ServiceTC.getResolver('updateOne'),
  serviceUpdateMany: _service.ServiceTC.getResolver('updateMany'),
  serviceRemoveById: _service.ServiceTC.getResolver('removeById'),
  serviceRemoveOne: _service.ServiceTC.getResolver('removeOne'),
  serviceRemoveMany: _service.ServiceTC.getResolver('removeMany')
};
exports.ServiceQuery = ServiceQuery;
exports.ServiceMutation = ServiceMutation;