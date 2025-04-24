import express from 'express';
import ResearchPaper from '../schemas/ReaserchPaper.js';
import CitationSummary from '../schemas/CitationSummary.js';
import BookPublication from '../schemas/bookPublications.js';
import Patent from '../schemas/Patent.js';
import SponsoredProject from '../schemas/SponsoredProj.js';
import ConsultancyProject from '../schemas/consultancyProject.js';
import ResearchGuidance from '../schemas/reaserchGuidance.js';
import InterestGroup from '../schemas/intrestGroup.js';
import InstituteLinkage from '../schemas/instituteLinkage.js';
import IndustryLinkage from '../schemas/industryLinkage.js';

const router = express.Router();

router.get('/research-papers', async (req, res) => {
  try {
    const papers = await ResearchPaper.find({});
    res.json(papers);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/research-papers/:id', async (req, res) => {
  try {
    const paper = await ResearchPaper.findById(req.params.id);
    if (!paper) return res.status(404).json({ error: 'Paper not found' });
    res.json(paper);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/research-papers', async (req, res) => {
  try {
    const paper = new ResearchPaper(req.body);
    await paper.save();
    res.status(201).json(paper);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

router.get('/citation-summaries', async (req, res) => {
  try {
    const summaries = await CitationSummary.find({});
    res.json(summaries);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/citation-summaries/:id', async (req, res) => {
  try {
    const summary = await CitationSummary.findById(req.params.id);
    if (!summary) return res.status(404).json({ error: 'Summary not found' });
    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/citation-summaries', async (req, res) => {
  try {
    const summary = new CitationSummary(req.body);
    await summary.save();
    res.status(201).json(summary);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
}); 

router.get('/book-publications', async (req, res) => {
  try {
    const books = await BookPublication.find({});
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/book-publications/:id', async (req, res) => {
  try {
    const book = await BookPublication.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/book-publications',async(req,res)=>{
    const book = new BookPublication(req.body);
    try{
        await book.save();
        res.status(201).json(book);
    }
    catch(error){
        res.status(400).json({ error: 'Bad request' });
    }
});

router.get('/patents', async (req, res) => {
  try {
    const patents = await Patent.find({});
    res.json(patents);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/patents/:id',async(req,res)=>{
    try{
        const id = Number(req.params.id);
        const patent = await patent.findOne(id)
        if(!patent) return res.status(404).json({ error: 'Patent not found' });
        res.send({message:"Patent fetched successfully", payload:patent});
    }
    catch(error){
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/patents',async(req,res)=>{
    const data = req.body;
    const patent = new patent(data);
    try{
        await patent.save();
        res.status(201).json(patent);
    }
    catch(error){
        res.status(400).json({ error: 'Bad request' });
    }
});

router.get('/sponsored-projects', async (req, res) => {
  try {
    const projects = await SponsoredProject.find({});
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}); 

router.get('/sponsored-projects/:id', async (req, res) => {
  try {
    const project = await SponsoredProject.findById(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/sponsored-projects', async (req, res) => {
  try {
    const project = new SponsoredProject(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

router.get('/consultancy-projects', async (req, res) => {
  try {
    const projects = await ConsultancyProject.find({});
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/consultancy-projects/:id', async (req, res) => {
  try {
    const project = await ConsultancyProject.findById(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/consultancy-projects', async (req, res) => {
  try {
    const project = new ConsultancyProject(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

router.get('/research-guidances', async (req, res) => {
  try {
    const guidances = await ResearchGuidance.find({});
    res.json(guidances);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/research-guidances/:id', async (req, res) => {
  try {
    const guidance = await ResearchGuidance.findById(req.params.id);
    if (!guidance) return res.status(404).json({ error: 'Guidance not found' });
    res.json(guidance);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/research-guidances', async (req, res) => {
  try {
    const guidance = new ResearchGuidance(req.body);
    await guidance.save();
    res.status(201).json(guidance);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
}); 

router.get('/interest-groups', async (req, res) => {
  try {
    const groups = await InterestGroup.find({});
    res.json(groups);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/interest-groups/:id', async (req, res) => {
  try {
    const group = await InterestGroup.findById(req.params.id);
    if (!group) return res.status(404).json({ error: 'Group not found' });
    res.json(group);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/interest-groups', async (req, res) => {
  try {
    const group = new InterestGroup(req.body);
    await group.save();
    res.status(201).json(group);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

router.get('/institute-linkages', async (req, res) => {
  try {
    const linkages = await InstituteLinkage.find({});
    res.json(linkages);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/institute-linkages/:id', async (req, res) => {
  try {
    const linkage = await InstituteLinkage.findById(req.params.id);
    if (!linkage) return res.status(404).json({ error: 'Linkage not found' });
    res.json(linkage);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/institute-linkages', async (req, res) => {
  try {
    const linkage = new InstituteLinkage(req.body);
    await linkage.save();
    res.status(201).json(linkage);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

router.get('/industry-linkages', async (req, res) => {
  try {
    const linkages = await IndustryLinkage.find({});
    res.json(linkages);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/industry-linkages/:id', async (req, res) => {
  try {
    const linkage = await IndustryLinkage.findById(req.params.id);
    if (!linkage) return res.status(404).json({ error: 'Linkage not found' });
    res.json(linkage);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/industry-linkages', async (req, res) => {
  try {
    const linkage = new IndustryLinkage(req.body);
    await linkage.save();
    res.status(201).json(linkage);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});


export default router;
