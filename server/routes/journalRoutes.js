import express from 'express';
import { deleteJournal, getJournal, getJournalById, getJournalByIdUpdate, postJournal } from '../controllers/journalController.js';



const router = express.Router();

router
.post('/journal', postJournal )
.get('/journal', getJournal)
.get('/journal/:id' , getJournalById)
.put('/journal/:id' , getJournalByIdUpdate)
.delete('/journal/:id' , deleteJournal);

export default router;