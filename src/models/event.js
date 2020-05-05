import mongoose, {Schema} from 'mongoose';
import timestamps from 'mongoose-timestamp';
import {composeWithMongoose} from 'graphql-compose-mongoose';

import {PointSchema} from './point';
import {ServiceSchema} from './service';
import {TimeSpanSchema} from './timespan';

export const EventSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    location: PointSchema,
    conferencingLink: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true
    },
    timeSpan: TimeSpanSchema,
    service: ServiceSchema
  },
  {
    collection: 'events'
  }
);

EventSchema.plugin(timestamps);
EventSchema.index({createdAt: 1, updatedAt: 1});
export const Event = mongoose.model('Event', EventSchema);
export const EventTC = composeWithMongoose(Event);
