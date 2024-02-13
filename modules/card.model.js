import mongoose from 'mongoose';

const AnuncioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  createdDate: { type: Date, required : true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true }
});


export default mongoose.models.Anuncio || mongoose.model('Anuncio', AnuncioSchema);