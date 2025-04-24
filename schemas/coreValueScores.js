import mongoose from 'mongoose';

const { Schema } = mongoose;

const coreValueScoreSchema = new Schema(
  {
    
    punctuality     : { type: Number, min: 0, max: 10, default: 0 },
    professionalism  : { type: Number, min: 0, max: 10, default: 0 },
    willingness      : { type: Number, min: 0, max: 10, default: 0 }, 
    cordiality       : { type: Number, min: 0, max: 10, default: 0 }, 
    novelPedagogy    : { type: Number, min: 0, max: 10, default: 0 },
    totalScore : { type: Number, default: 0 } 
  },
  { timestamps: true, collection: 'coreValueScores' }
);

export default  mongoose.model('CoreValueScore', coreValueScoreSchema);
