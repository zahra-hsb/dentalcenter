import mongoose, { Schema } from 'mongoose';

const AdminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    tel: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const AdminsModel = mongoose.models.admins || mongoose.model('admins', AdminSchema)

export default AdminsModel