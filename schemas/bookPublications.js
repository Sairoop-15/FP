import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookPublicationSchema = new Schema(
  {
    id:          { type: Number, required: true },
    title:            { type: String, required: true },
    publicationLevel: { type: String, enum: ['National', 'International'], required: true },
    authors:          { type: String, required: true },
    publisherDetails: { type: String },
    editionVolumeIssuePages: { type: String },
    pubDate:   { type: Date },
    issnIsbn:  { type: String },
    publishedOrEdited: { type: String, enum: ['Published', 'Edited'] },

    score: { type: Number, default: 0 }
  },
  { timestamps: true, collection: 'bookPublications' }
);

export default mongoose.model('BookPublication', bookPublicationSchema);
