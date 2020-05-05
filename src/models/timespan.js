import mongoose, {Schema} from 'mongoose';
export const TimeSpanSchema = new Schema(
  {
    startsAt: {
      type: Date,
      required: true
    },
    endsAt:{
      type: Date,
      required: true
    }
  }
);
