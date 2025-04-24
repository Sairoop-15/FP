import express from 'express';
import CoreValueScore from '../schemas/coreValueScores.js';
import AppraisalSummary from '../schemas/apprisalSummary.js';

const router = express.Router();

router.get('/core-value-score', async (req, res) => {
  try {
    const scores = await CoreValueScore.find({});
    res.json(scores);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/core-value-score/:id', async (req, res) => {
  try {
    const score = await CoreValueScore.findById(req.params.id);
    if (!score) return res.status(404).json({ error: 'Core value score not found' });
    res.json(score);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/core-value-score', async (req, res) => {
  try {
    const score = new CoreValueScore(req.body);
    await score.save();
    res.status(201).json(score);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

router.get('/appraisal-summary', async (req, res) => {
  try {
    const summaries = await AppraisalSummary.find({});
    res.json(summaries);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/appraisal-summary/:id', async (req, res) => {
  try {
    const summary = await AppraisalSummary.findById(req.params.id);
    if (!summary) return res.status(404).json({ error: 'Appraisal summary not found' });
    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/appraisal-summary', async (req, res) => {
  try {
    const summary = new AppraisalSummary(req.body);
    await summary.save();
    res.status(201).json(summary);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

export default router;
