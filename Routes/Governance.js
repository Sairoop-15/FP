import express from 'express';
import AdministrativeDuty from '../schemas/administrativeDuty.js';
import StudentActivity from '../schemas/StudentActivity.js';

const router = express.Router();

router.get('/administrative-duty', async (req, res) => {
  try {
    const duties = await AdministrativeDuty.find({});
    res.json(duties);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/administrative-duty/:id', async (req, res) => {
  try {
    const duty = await AdministrativeDuty.findById(req.params.id);
    if (!duty) return res.status(404).json({ error: 'Administrative duty not found' });
    res.json(duty);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/administrative-duty', async (req, res) => {
  try {
    const duty = new AdministrativeDuty(req.body);
    await duty.save();
    res.status(201).json(duty);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

router.get('/student-activity', async (req, res) => {
  try {
    const activities = await StudentActivity.find({});
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/student-activity/:id', async (req, res) => {
  try {
    const activity = await StudentActivity.findById(req.params.id);
    if (!activity) return res.status(404).json({ error: 'Student activity not found' });
    res.json(activity);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/student-activity', async (req, res) => {
  try {
    const activity = new StudentActivity(req.body);
    await activity.save();
    res.status(201).json(activity);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

export default router;
