import mongoose from 'mongoose';

const { Schema } = mongoose;

const instituteLinkageSchema = new Schema(
  {
    id:           { type: Number, required: true },
    instituteName: { type: String, required: true },
    contactPerson: { type: String },
    outcome:       { type: String },
    score: { type: Number, default: 0 }
  },
  { timestamps: true, collection: 'instituteLinkages' }
);

export default mongoose.model('InstituteLinkage', instituteLinkageSchema);
