import mongoose, {Schema} from 'mongoose';
import timestamps from 'mongoose-timestamp';
import {composeWithMongoose} from 'graphql-compose-mongoose';

import {UserSchema} from './user';

export const ServiceSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    provider: UserSchema,
    consumer: UserSchema,
    schemaType: {
      type: String,
      enum : ['class','service'],
      default: 'class'
    },
  },
  {
    collection: 'services'
  }
);

ServiceSchema.plugin(timestamps);
ServiceSchema.index({createdAt: 1, updatedAt: 1});
export const Service = mongoose.model('Service', ServiceSchema);
export const ServiceTC = composeWithMongoose(Service);
