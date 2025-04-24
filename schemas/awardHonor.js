import mongoose from 'mongoose';

const { Schema } = mongoose;

const awardHonorSchema = new Schema(
  {
    sno:       { type: Number, required: true },  // 1, 2, 3, ...
    awardType:   { type: String, required: true },  // Best Teacher, Young Scientist, etc.
    organization:{ type: String, required: true },
    score: { type: Number, default: 0 }             // 10 each
  },
  { timestamps: true, collection: 'awardHonors' }
);

export default  mongoose.model('AwardHonor', awardHonorSchema);
