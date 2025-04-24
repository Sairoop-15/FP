import mongoose from 'mongoose';

const { Schema } = mongoose;

const resourcePersonSchema = new Schema(
  {
    sno:         { type: Number, required: true },
    typeOfProgram: { type: String, required: true }, 
    nameofProgramme:{type:String,required:true},  
    programName:   { type: String, required: true },
    lectureTopic:  { type: String },
    duration:      { type: String },                  
    venue:         { type: String },
    organizedBy:   { type: String },
    score: { type: Number, default: 0 }  // 10 each
  },
  { timestamps: true, collection: 'resourcePersons' }
);

export default mongoose.model('ResourcePerson', resourcePersonSchema);
