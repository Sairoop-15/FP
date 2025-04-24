import mongoose from 'mongoose';

const { Schema } = mongoose;

const researchGuidanceSchema = new Schema(
  {
    id:          { type: Number, required: true },
    studentName: { type: String, required: true },
    university:  { type: String },
    thesisTitle: { type: String },
    role:        { type: String, enum: ['Guide', 'Co‑Guide'], required: true },
    score: { type: Number, default: 0 }
  },
  { timestamps: true, collection: 'researchGuidances' }
);

export default mongoose.model('ResearchGuidance', researchGuidanceSchema);
