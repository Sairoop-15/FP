import mongoose from 'mongoose';


const FormSchema = new mongoose.Schema({
    EmployeeCode: { type: Number, required: true, unique: true },
    Name: { type: String, required: true },
    DateofBirth: { type: Date, required: true },
    DateofJoining: { type: Date, required: true },
    Designation: { type: String, required: true },
    Department: { type: String, required: true },
    AssesmentPeriod: { type: Date, required: true },
    Salary: { type: Number, required: true },
    Qualification: { type: String, required: true },
    HigherQualification: { type: String, required: true },
    Specialization: { type: String, required: true }, 
    PeriodOfService: { type: Number, required: true },
    Experience: {
        Teaching: { Years: { type: Number, required: true }, Months: { type: Number, required: true } },
        Industrial: { Years: { type: Number, required: true }, Months: { type: Number, required: true } },
        Research: { Years: { type: Number, required: true }, Months: { type: Number, required: true } }
    },
    TotalExp: { Years: { type: Number, required: true }, Months: { type: Number, required: true } },
    Address: [{
        HNo: { type: String, required: true }, 
        Street: { type: String, required: true },
        City: { type: String, required: true },
        State: { type: String, required: true },
        Pincode: { type: Number, required: true }
    }],
    Leaves: {
        CLs: { type: Number, required: true },
        ELs: { type: Number, required: true },
        HPLs: { type: Number, required: true },
        OD: { type: Number, required: true },
        OtherLeaves: {
            ML: { type: Number, default: 0 },
            PL: { type: Number, default: 0 },
            SL: { type: Number, default: 0 }
        }
    }
});

const Form = mongoose.model('Form', FormSchema);

export default Form;
    