import mongoose from 'mongoose';

const { Schema } = mongoose;

const appraisalSummarySchema = new Schema(
  {
    
    teachingLearningEval : { type: Number, default: 0 }, // /150
    researchConsultancy  : { type: Number, default: 0 }, // /150
    facultyDevelopment   : { type: Number, default: 0 }, // /100
    governanceAdmin      : { type: Number, default: 0 }, // /50
    supplementaryProcess : { type: Number, default: 0 }, // /50
    coreValuesInitiative : { type: Number, default: 0 }, // /50
  },
  { timestamps: true, collection: 'appraisalSummaries' }
);

export default  mongoose.model('AppraisalSummary', appraisalSummarySchema);
