import mongoose from 'mongoose';

const { Schema } = mongoose;

const administrativeDutySchema = new Schema(
  {
    sno:         { type: Number, required: true },
    responsibility: { type: String, required: true }, 
    instituteOrDept: { type: String, required: true }, 
    workInvolved:   { type: String },                
    period:         { type: String },               
    score: { type: Number, default: 0 }               
  },
  { timestamps: true, collection: 'administrativeDuties' }
);

export default mongoose.model('AdministrativeDuty', administrativeDutySchema);
