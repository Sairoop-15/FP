import mongoose from 'mongoose';

const { Schema } = mongoose;

const editorialContributionSchema = new Schema(
  {
    sno: { type: Number, required: true },
    natureOfContribution: { type: String, required: true }, // Editor, Reviewer, Committee‑member
    organizationDetails:  { type: String, required: true },
    level:                { type: String, enum: ['National', 'International'], required: true },
    dateOrDuration:       { type: String },
    score: { type: Number, default: 0 } // 10 each
  },
  { timestamps: true, collection: 'editorialContributions' }
);

export default mongoose.model('EditorialContribution', editorialContributionSchema);
