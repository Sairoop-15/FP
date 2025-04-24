import mongoose from 'mongoose';

const { Schema } = mongoose;

const eventAttendedSchema = new Schema(
  {
    sno:         { type: Number, required: true },
    paperTitle:   { type: String },
    authors:      [String],
    eventName:    { type: String, required: true },   // conference / seminar
    period:       { type: String },
    level:        { type: String, enum: ['National', 'International'], required: true },
    score: { type: Number, default: 0 }  // 10 each
  },
  { timestamps: true, collection: 'eventsAttended' }
);

export default mongoose.model('EventAttended', eventAttendedSchema);
