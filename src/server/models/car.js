import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
    make: {type: String, required: true},
    model: {type: String, required: true, unique: true},
});

export default mongoose.model('Car', carSchema);
