import mongoose from 'mongoose';

const { Schema } = mongoose;

const profMembershipSchema = new Schema(
  {
    sno:             { type: Number, required: true }, // Serial number for the membership
    associationName: { type: String, required: true },
    status:          { type: String, enum: ['National', 'International', 'National Executive'], required: true },
    score: { type: Number, default: 0 }                 // 5 / 10 / 10
  },
  { timestamps: true, collection: 'profMemberships' }
);

export default mongoose.model('ProfMembership', profMembershipSchema);
