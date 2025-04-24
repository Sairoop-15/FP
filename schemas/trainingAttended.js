import mongoose from 'mongoose';
const { Schema } = mongoose;

const trainingAttendedSchema = new Schema(
  {
   sno:         { type: Number, required: true },
    programName: { type: String, required: true },
    period:      { type: String }, // "1‑5 Jun 2025"
    durationDays:{ type: Number },
    score: { type: Number, default: 0 }  // ≥5 days →10,  <5 days →5
  },
  { timestamps: true, collection: 'trainingAttended' }
);

export default mongoose.model('TrainingAttended', trainingAttendedSchema);
