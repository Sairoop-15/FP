import mongoose from 'mongoose';

const { Schema } = mongoose;

const projectGuidanceSchema = new Schema(
  {
    id: { type: Number, required: true },
    courseLevel: { type: String, enum: ['BTech', 'MTech'], required: true },
    projectType: { type: String, enum: ['Mini', 'Major'], required: true },
    countGuided: { type: Number, min: 0, required: true },
    score: { type: Number, default: 0 }
  },
  { timestamps: true, collection: 'projectGuidances' }
);
export default mongoose.model('ProjectGuidance', projectGuidanceSchema);
