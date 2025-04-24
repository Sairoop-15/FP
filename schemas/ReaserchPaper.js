import mongoose from 'mongoose';

const { Schema } = mongoose;

const researchPaperSchema = new Schema(
  {
    id:              { type: Number, required: true },
    journalOrConfName: { type: String, required: true },
    level:             { type: String, enum: ['National', 'International'], required: true },
    authors:           { type: String, required: true },
    authorRole:        { type: String, enum: ['First', 'Corresponding', 'Supervisor', 'Co‑Author'] },
    volumeIssuePages:  { type: String },
    publicationDate:   { type: Date },
    issnIsbn:          { type: String },
    impactFactor:      { type: Number },
    indexedIn:         [{ type: String }],         
    citationCount:     { type: Number, default: 0 },
    score: { type: Number, default: 0 }
  },
  { timestamps: true, collection: 'researchPapers' }
);

export default mongoose.model('ResearchPaper', researchPaperSchema);
