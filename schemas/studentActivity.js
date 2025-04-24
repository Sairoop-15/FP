import mongoose from 'mongoose';

const { Schema } = mongoose;

const studentActivitySchema = new Schema(
  {
    sno:      { type: Number, required: true },   
    activity: { type: String, required: true }, 
    period:   { type: String },                  
    score: { type: Number, default: 0 }          
  },
  { timestamps: true, collection: 'studentActivities' }
);

export default mongoose.model('StudentActivity', studentActivitySchema);
