import mongoose from 'mongoose';

const { Schema } = mongoose;

const phdStatusSchema = new Schema(
  {
    registered:       { type: Boolean, default: false }, 
    clearedPrePhd:    { type: Boolean, default: false },
    thesisSubmitted:  { type: Boolean, default: false }, 
    awarded:          { type: Boolean, default: false }, 
    totalScore: { type: Number, default: 0 }
  },
  { timestamps: true, collection: 'phdStatuses' }
);

export default mongoose.model('PhdStatus', phdStatusSchema);
