import mongoose from 'mongoose';

const { Schema } = mongoose;

const industryLinkageSchema = new Schema(
  {
    id:           { type: Number, required: true },
    industryName: { type: String, required: true },
    contactPerson:{ type: String },
    outcome:      { type: String },
    score: { type: Number, default: 0 }
  },
  { timestamps: true, collection: 'industryLinkages' }
);

export default mongoose.model('IndustryLinkage', industryLinkageSchema);
