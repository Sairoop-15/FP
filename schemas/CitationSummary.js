import mongoose from 'mongoose';
const { Schema } = mongoose;

const citationSummarySchema = new Schema(
  {
    id: { type: Number, required: true },
    publicationsTillDate : { type: Number, required: true },
    pubsWithCitations    : { type: Number, required: true },
    totalCitations       : { type: Number, required: true },
    hIndex : {
      googleScholar : { type: Number, default: 0 },
      scopus        : { type: Number, default: 0 },
      wos           : { type: Number, default: 0 }
    },
    Score : { type: Number, default: 0 },
  },
  { timestamps: true, collection: 'citationSummaries' }
);

export default mongoose.model('CitationSummary', citationSummarySchema);
