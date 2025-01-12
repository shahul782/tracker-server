const express = require("express");
const Expense = require("../Modal/TrackerScheema");
const router = express.Router();

router.post("/expenses", async (req, res) => {
  try {
    const expense = new Expense(req.body);
    console.log(expense);

    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



module.exports = router;
