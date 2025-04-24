import mongoose from 'mongoose';

const { Schema } = mongoose;

const programOrganizedSchema = new Schema(
  {
     sno:         { type: Number, required: true },
    title:        { type: String, required: true },
    period:       { type: String },      // e.g. "10‑12 Aug 2025"
    sponsors:     { type: String },
    status:       { type: String, enum: ['Completed', 'Ongoing', 'Planned'] },
    level:        { type: String, enum: ['National', 'International'], required: true },
    score: { type: Number, default: 0 }  // 10 each
  },
  { timestamps: true, collection: 'programsOrganized' }
);
export default mongoose.model('ProgramOrganized', programOrganizedSchema);
