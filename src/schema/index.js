import {SchemaComposer} from 'graphql-compose';
import db from '../utils/db';

const schemaComposer = new SchemaComposer()

import {UserQuery, UserMutation} from './user';
import {ServiceQuery, ServiceMutation} from './service';

schemaComposer.Query.addFields({
  ...UserQuery,
  ...ServiceQuery,
});

schemaComposer.Mutation.addFields({
  ...UserMutation,
  ...ServiceMutation,
});

export default schemaComposer.buildSchema();
