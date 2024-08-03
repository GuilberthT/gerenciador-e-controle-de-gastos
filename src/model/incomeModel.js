import { Schema, model } from 'mongoose';

const incomeSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentDate: {
    type: Date,
    required: true,
  },
});

export default model('Income', incomeSchema);
