import mongoose from 'mongoose';

const shopSchema = mongoose.Schema({
    name: String,
    location: String,
    owner: String,
    banner_img: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const ShopModel = mongoose.model('Shop', shopSchema);

export default ShopModel;