import mongoose from 'mongoose';
const { Schema } = mongoose;

const courseEngagementSchema = new Schema(
  {
    courseId: { type:Number, required: true },

    program: { type: String, enum: ['BTech', 'MTech'], required: true },
    yearOrSem: { type: String, required: true },

    novelPedagogy: {
      details: { type: String },
      score: { type: Number, min: 0, max: 5, default: 0 }
    },

    teachingPeriodsPlanned: { type: Number, required: true },
    teachingPeriodsConducted: { type: Number, required: true },
    engagementPercent: { type: Number, min: 0, max: 100, required: true },
    totalScore: { type: Number, default: 0 }
  },
  { timestamps: true, collection: 'courseEngagements' }
);

export default mongoose.model('CourseEngagement', courseEngagementSchema);
