import express from 'express';
import ProfMembership from '../schemas/profMembership.js';
import AwardHonor from '../schemas/awardHonor.js';
import DifferentiatorActivity from '../schemas/differentiatorActivity.js';
import InternshipArranged from '../schemas/internshipArranged.js';

const router = express.Router();

router.get('/prof-membership', async (req, res) => {
  try {
    const memberships = await ProfMembership.find({});
    res.json(memberships);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/prof-membership/:id', async (req, res) => {
  try {
    const membership = await ProfMembership.findById(req.params.id);
    if (!membership) return res.status(404).json({ error: 'Membership not found' });
    res.json(membership);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/prof-membership', async (req, res) => {
  try {
    const membership = new ProfMembership(req.body);
    await membership.save();
    res.status(201).json(membership);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

router.get('/award-honor', async (req, res) => {
  try {
    const awards = await AwardHonor.find({});
    res.json(awards);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/award-honor/:id', async (req, res) => {
  try {
    const award = await AwardHonor.findById(req.params.id);
    if (!award) return res.status(404).json({ error: 'Award not found' });
    res.json(award);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/award-honor', async (req, res) => {
  try {
    const award = new AwardHonor(req.body);
    await award.save();
    res.status(201).json(award);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

router.get('/differentiator-activity', async (req, res) => {
  try {
    const activities = await DifferentiatorActivity.find({});
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/differentiator-activity/:id', async (req, res) => {
  try {
    const activity = await DifferentiatorActivity.findById(req.params.id);
    if (!activity) return res.status(404).json({ error: 'Activity not found' });
    res.json(activity);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/differentiator-activity', async (req, res) => {
  try {
    const activity = new DifferentiatorActivity(req.body);
    await activity.save();
    res.status(201).json(activity);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

router.get('/internship-arranged', async (req, res) => {
  try {
    const internships = await InternshipArranged.find({});
    res.json(internships);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/internship-arranged/:id', async (req, res) => {
  try {
    const internship = await InternshipArranged.findById(req.params.id);
    if (!internship) return res.status(404).json({ error: 'Internship not found' });
    res.json(internship);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/internship-arranged', async (req, res) => {
  try {
    const internship = new InternshipArranged(req.body);
    await internship.save();
    res.status(201).json(internship);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

export default router;
