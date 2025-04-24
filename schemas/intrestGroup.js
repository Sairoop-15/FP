import mongoose from 'mongoose';

const { Schema } = mongoose;

const interestGroupSchema = new Schema(
  {
    id:        { type: Number, required: true },
    groupName: { type: String, required: true },
    groupSize: { type: Number },
    outcome:   { type: String },
    score: { type: Number, default: 0 }
  },
  { timestamps: true, collection: 'interestGroups' }
);

export default mongoose.model('InterestGroup', interestGroupSchema);
