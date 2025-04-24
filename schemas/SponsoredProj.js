import mongoose from 'mongoose';

const { Schema } = mongoose;

const sponsoredProjectSchema = new Schema(
  {
    id:           { type: Number, required: true },
    title:         { type: String, required: true },
    fundingAgency: { type: String },
    amountLakhs:   { type: Number },
    role:          { type: String, enum: ['PI', 'Co‑PI'] },
    status:        { type: String, enum: ['Ongoing', 'Completed', 'Applied'] },
    projectDuration: { type: String },
    score: { type: Number, default: 0 }
  },
  { timestamps: true, collection: 'sponsoredProjects' }
);
export default mongoose.model('SponsoredProject', sponsoredProjectSchema);
