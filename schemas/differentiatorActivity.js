import mongoose from 'mongoose';

const { Schema } = mongoose;

const differentiatorActivitySchema = new Schema(
  {
    sno: { type: Number, required: true },          // e.g. 1, 2, 3, ... (for ordering)
    differentiator: { type: String, required: true },   // e.g. "Green Campus", "Social Impact Cell"
    role: {                                             // maps to scoring
      type: String,
      enum: ['Participated', 'Led', 'Initiated'],
      required: true
    },
    score: { type: Number, default: 0 } // 3 / 7 / 10 respectively
  },
  { timestamps: true, collection: 'differentiatorActivities' }
);

export default mongoose.model('DifferentiatorActivity', differentiatorActivitySchema);
