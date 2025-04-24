import express from 'express';
import CourseEngagement from '../schemas/CourseEngagement.js';
import CourseOutcome from '../schemas/CourseOutcome.js';
import ProjectGuidance from '../schemas/ProjectGuidance.js';

const router = express.Router();

router.get('/course-engagements', async (req, res) => {
    try {
        const courseEngagements = await CourseEngagement.find();
        res.send({ message: "Course Engagements fetched successfully", payload: courseEngagements });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/course-engagements/:id', async (req, res) => {
    try {
        const courseEngagement = await CourseEngagement.findById(req.params.id);
        if (!courseEngagement) return res.status(404).send({ message: "Course Engagement not found" });
        res.send({ message: "Course Engagement fetched successfully", payload: courseEngagement });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/course-outcomes', async (req, res) => {
    try {
        const courseOutcomes = await CourseOutcome.find();
        res.send({ message: "Course Outcomes fetched successfully", payload: courseOutcomes });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/course-outcomes/:id', async (req, res) => {
    try {
        const courseOutcome = await CourseOutcome.findById(req.params.id);
        if (!courseOutcome) return res.status(404).send({ message: "Course Outcome not found" });
        res.send({ message: "Course Outcome fetched successfully", payload: courseOutcome });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/course-engagements', async (req, res) => {
    try {
        const courseEngagement = new CourseEngagement(req.body);
        await courseEngagement.save();
        res.status(201).send({ message: "Course Engagement created successfully", payload: courseEngagement });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/course-outcomes', async (req, res) => {
    try {
        const courseOutcome = new CourseOutcome(req.body);
        await courseOutcome.save();
        res.status(201).send({ message: "Course Outcome created successfully", payload: courseOutcome });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/project-guidances', async (req, res) => {
    try {
        const projectGuidances = await ProjectGuidance.find();
        res.send({ message: "Project Guidances fetched successfully", payload: projectGuidances });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/project-guidances/:id', async (req, res) => {
    try {
        const projectGuidance = await ProjectGuidance.findById(req.params.id);
        if (!projectGuidance) return res.status(404).send({ message: "Project Guidance not found" });
        res.send({ message: "Project Guidance fetched successfully", payload: projectGuidance });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/project-guidances', async (req, res) => {
    try {
        const projectGuidance = new ProjectGuidance(req.body);
        await projectGuidance.save();
        res.status(201).send({ message: "Project Guidance created successfully", payload: projectGuidance });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
