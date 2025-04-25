import express from 'express';
import PhdStatus from '../schemas/PhdStatus.js';
import ProgramOrganized from '../schemas/ProgramOrganized.js';
import EventAttended from '../schemas/EventAttended.js';
import ResourcePerson from '../schemas/ResourcePerson.js';
import EditorialContribution from '../schemas/EditorialContribution.js';
import TrainingAttended from '../schemas/trainingAttended.js';

const router = express.Router();
router.use(express.json())

router.get('/phd-status', async (req, res) => {
  try {
    const phdStatus = await PhdStatus.find({});
    res.json(phdStatus);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/phd-status/:id', async (req, res) => {
  try {
    const phdStatus = await PhdStatus.findById(req.params.id);
    if (!phdStatus) return res.status(404).json({ error: 'PhD status not found' });
    res.json(phdStatus);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/phd-status', async (req, res) => {
  try {
    const phdStatus = new PhdStatus(req.body);
    await phdStatus.save();
    res.status(201).json(phdStatus);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

router.get('/program-organized', async (req, res) => {
  try {
    const programs = await ProgramOrganized.find({});
    res.json(programs);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/program-organized/:id', async (req, res) => {
  try {
    const program = await ProgramOrganized.findById(req.params.id);
    if (!program) return res.status(404).json({ error: 'Program not found' });
    res.json(program);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/program-organized', async (req, res) => {
  try {
    const program = new ProgramOrganized(req.body);
    await program.save();
    res.status(201).json(program);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

router.get('/event-attended', async (req, res) => {
  try {
    const events = await EventAttended.find({});
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/event-attended/:id', async (req, res) => {
  try {
    const event = await EventAttended.findById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/event-attended', async (req, res) => {
  try {
    const event = new EventAttended(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

router.get('/resource-person', async (req, res) => {
  try {
    const resources = await ResourcePerson.find({});
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/resource-person/:id', async (req, res) => {
  try {
    const resource = await ResourcePerson.findById(req.params.id);
    if (!resource) return res.status(404).json({ error: 'Resource person not found' });
    res.json(resource);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/resource-person', async (req, res) => {
  try {
    const resource = new ResourcePerson(req.body);
    await resource.save();
    res.status(201).json(resource);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

router.get('/editorial-contribution', async (req, res) => {
  try {
    const contributions = await EditorialContribution.find({});
    res.json(contributions);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/editorial-contribution/:id', async (req, res) => {
  try {
    const contribution = await EditorialContribution.findById(req.params.id);
    if (!contribution) return res.status(404).json({ error: 'Editorial contribution not found' });
    res.json(contribution);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/editorial-contribution', async (req, res) => {
  try {
    const contribution = new EditorialContribution(req.body);
    await contribution.save();
    res.status(201).json(contribution);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

router.get('/training-attended', async (req, res) => {
  try {
    const trainings = await TrainingAttended.find({});
    res.json(trainings);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/training-attended/:id', async (req, res) => {
  try {
    const training = await TrainingAttended.findById(req.params.id);
    if (!training) return res.status(404).json({ error: 'Training not found' });
    res.json(training);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/training-attended', async (req, res) => {
  try {
    const training = new TrainingAttended(req.body);
    await training.save();
    res.status(201).json(training);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});


export default router;
