import express from 'express';
import mongoose from 'mongoose';
import Form from './schemas/AppraisalSchema.js';
import teachingRoutes from './Routes/Teaching.js';
import researchRoutes from './Routes/Reaserch.js';
import facultyDevRoutes from './Routes/FacultyDev.js';
import governanceRoutes from './Routes/Governance.js';
import supplementaryRoutes from './Routes/Supplementary.js';
import summaryRoutes from './Routes/Summary.js';

const app = express();
app.use(express.json());

app.use('/teaching', teachingRoutes);
app.use('/research', researchRoutes);
app.use('/faculty-dev', facultyDevRoutes);
app.use('/governance', governanceRoutes);
app.use('/supplementary', supplementaryRoutes);
app.use('/summary', summaryRoutes);

const mongoURI = 'mongodb://127.0.0.1:27017/FieldProj';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.json({ message: 'API is working' });
});

app.post('/api/employees', async (req, res) => {
    try {
        const newEmployee = new Form(req.body);
        const savedEmployee = await newEmployee.save();
        res.status(201).json({ 
            message: 'Employee record added successfully', 
            data: savedEmployee 
        });
    } catch (error) {
        res.status(400).json({ 
            status: 'error',
            message: error.message,
            details: error.errors 
        });
    }
});

app.get('/api/employees', async (req, res) => {
    try {
        const employees = await Form.find();
        res.status(200).json({
            status: 'success',
            message: 'Employees retrieved successfully',
            count: employees.length,
            data: employees
        });
    } catch (error) {
        res.status(500).json({ 
            status: 'error',
            message: error.message 
        });
    }
});

app.get('/api/employees/:id', async (req, res) => {
    try {
        const employee = await Form.findOneAndDelete({ EmployeeCode: parseInt(req.params.id) }); 
        if (!employee) {
            return res.status(404).json({ 
                status: 'error',
                message: 'Employee not found' 
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Employee retrieved successfully',
            data: employee
        });
    } catch (error) {
        res.status(500).json({ 
            status: 'error',
            message: error.message 
        });
    }
});

app.put('/api/employees/:id', async (req, res) => {
    try {
        const updatedEmployee = await Form.findOneAndUpdate(
            { EmployeeCode: parseInt(req.params.id) }, // Ensure EmployeeCode is treated as a number
            req.body,
            { new: true }
        );

        if (!updatedEmployee) {
            return res.status(404).json({
                status: 'error',
                message: 'Employee not found'
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Employee updated successfully',
            data: updatedEmployee
        });
    } catch (error) {
        res.status(500).json({ 
            status: 'error',
            message: error.message
        });
    }
});

app.delete('/api/employees/:id', async (req, res) => {
    try {
        const deletedEmployee = await Form.findOneAndDelete({ EmployeeCode: parseInt(req.params.id) }); 
        if (!deletedEmployee) {
            return res.status(404).json({ 
                status: 'error',
                message: 'Employee not found' 
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Employee deleted successfully',
            data: deletedEmployee
        });
    } catch (error) {
        res.status(500).json({ 
            status: 'error',
            message: error.message 
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
