import mongoose from 'mongoose';

const { Schema } = mongoose;

const internationalExposureSchema = new Schema(
    {
        sno: { type: Number, required: true },
        purposeofTravel: { type: String, required: true },
        place: { type: String, required: true },
        outcome:{ type: String },
        score: { type: Number, default: 0 },
    },
);

export default  mongoose.model('InternationalExposure', internationalExposureSchema);