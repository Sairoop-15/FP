import mongoose from 'mongoose';
const { Schema } = mongoose;

const courseOutcomeSchema = new Schema(
  {
    courseId: { type: Number, required: true },
    courseName: { type: String, required: true },
    classSize: { type: Number, required: true },          
    studentsBelow75: { type: Number, required: true },    
    studentsAboveEqual75: { type: Number, required: true },
    attendanceScore: { type: Number, min: 0, max: 5, default: 0 },
    feedbackScore:   { type: Number, min: 0, max: 5, default: 0 },
    gradeStats: {
      OorAplus: { type: Number, default: 0 }, 
      AorB:     { type: Number, default: 0 }, 
      CtoD:     { type: Number, default: 0 } 
    },

    resultsScore: { type: Number, min: 0, max: 10, default: 0 }, 
    totalScore: { type: Number, default: 0 } 
  },
  { timestamps: true, collection: 'courseOutcomes' }
);

export default  mongoose.model('CourseOutcome', courseOutcomeSchema);
