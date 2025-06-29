import journals from '../models/journalModel.js'


export const getJournal =  async(req , res) => {
try {
    const journal =await journals.find()
    res.status(200).json(journal)

} catch (err) {
    res.status(401).json({ error : err.message})
}};

export const getJournalById = async(req , res) => {
    try {
        const journal = await journals.findById(req.params.id);
        journal ? res.status(200).json(journal) : res.status(400).send("Journal Not Found by this id!");
    } catch (err) {
        res.status(400).json({error : err.message});
    }
}

export const getJournalByIdUpdate = async(req , res ) => {
try {
    const journal = await journals.findByIdAndUpdate(req.params.id , req.body , {
        new: true , 
        runValidators: true
    });
    journal ? res.status(200).json(journal) : res.status(400).send("Not Found!")
} catch (err) {
   res.status(400).json({error : err.message}) 
}
}

export const deleteJournal = async(req , res ) => {
    try {
        const journal = await journals.findByIdAndDelete(req.params.id);
        journal ? res.status(200).json(journal) : res.status(400).send("Journal Not Found by this id");
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

export const postJournal = async(req , res) => {
  try {
      const journal = await journals.create(req.body);
    res.status(200).json(journal);
  } catch (err) {
    res.status(400).json({error : err.message})
  }
}