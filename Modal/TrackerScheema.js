// const mongoose = require('mongoose')
//     const expenseSchema = new mongoose.Schema({
//         name: { type: String, required: true },
//         project: { type: String, required: true },
//         fromDate: { type: Date, required: true },
//         toDate: { type: Date, required: true },
//         travelReason: { type: String, required: true },
//         travelType: { type: String, required: true },
//         modeOfTransport: { type: String },
//         fuelCost: { type: Number },
//         tollCharges: { type: Number },
//         driverCost: { type: Number },
//         foodCost: { type: Number },
//         accommodationCost: { type: Number },
//         durationOfStay: { type: String },
//         hospitalCharges: { type: Number },
//         documentationFees: { type: Number },
//         visaCharges: { type: Number },
//         flightTicketCost: { type: Number },
//         shuttleCost: { type: Number },
//         governmentServiceCost: { type: Number },
//         numberOfPersons: { type: Number },
//       });
      

//  const expenseModal = mongoose.model('expenseSchema',expenseSchema)
//  module.exports = expenseModal;





const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  project: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  travelReason: { type: String, required: true },
  travelType: { type: String, required: true },
  modeOfTransport: { type: String },
  fuelCost: { type: Number },
  tollCharges: { type: Number },
  driverCost: { type: Number },
  foodCost: { type: Number },
  accommodationCost: { type: Number },
  durationOfStay: { type: String },
  hospitalCharges: { type: Number },
  documentationFees: { type: Number },
  visaCharges: { type: Number },
  flightTicketCost: { type: Number },
  shuttleCost: { type: Number },
  governmentServiceCost: { type: Number },
  numberOfPersons: { type: Number },
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
