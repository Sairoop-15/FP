import mongoose from 'mongoose';

const { Schema } = mongoose;

const consultancyProjectSchema = new Schema(
  {
    id:              { type: Number, required: true },
    name:             { type: String, required: true },
    sponsoringAgency: { type: String },
    amountLakhs:      { type: Number },

    score: { type: Number, default: 0 }
  },
  { timestamps: true, collection: 'consultancyProjects' }
);

export default mongoose.model('ConsultancyProject', consultancyProjectSchema);
