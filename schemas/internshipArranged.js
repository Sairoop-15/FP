import mongoose from 'mongoose';

const { Schema } = mongoose;

const internshipArrangedSchema = new Schema(
  {
    sno:         { type: Number, required: true },
    industryName:   { type: String, required: true },
    studentBatch:   { type: String },   // "ECE 2024", "III Year CSE‑A", etc.
    internshipInfo: { type: String },   // brief details on nature/area
    period:         { type: String },   // "Jun–Jul 2025"
    score: { type: Number, default: 0 } // 5 each
  },
  { timestamps: true, collection: 'internshipsArranged' }
);

export default mongoose.model('InternshipArranged', internshipArrangedSchema);
