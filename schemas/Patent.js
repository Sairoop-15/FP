import mongoose from 'mongoose';

const { Schema } = mongoose;

const patentSchema = new Schema(
  {
    id:          { type: Number, required: true },
    title:         { type: String, required: true },
    country:       { type: String, required: true },
    applicantName: { type: String },
    applicationNo: { type: String },
    status:        { type: String, enum: ['Filed', 'Published', 'Granted'] },
    filingDate:    { type: Date },
    publicationDate: { type: Date },
    grantDate:       { type: Date },
    validDuration:   { type: String },

    score: { type: Number, default: 0 }
  },
  { timestamps: true, collection: 'patents' }
);
export default mongoose.model('Patent', patentSchema);
