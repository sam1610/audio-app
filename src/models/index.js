// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AudioRec } = initSchema(schema);

export {
  AudioRec
};