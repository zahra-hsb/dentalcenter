import mongoose, { Schema } from 'mongoose';  
import bcrypt from 'bcrypt';  

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
        required: true,  
        unique: true //Ensure usernames are unique  
    },  
    password: {  
        type: String,  
        required: true,  
        select: false //Prevent password from being returned in queries by default.  
    },  
    selected: {  
        type: Boolean,  
        required: true  
    },
    mainAdmin: {
        type: Boolean
    }
});  

// Middleware to hash the password before saving  
AdminSchema.pre('save', async function(next) {  
    if (!this.isModified('password')) return next(); // Only hash if password is modified  

    try {  
        const saltRounds = 10; // Adjust as needed (10 is a good default)  
        const hashedPassword = await bcrypt.hash(this.password, saltRounds);  
        this.password = hashedPassword;  
        next();  
    } catch (error) {  
        return next(error); // Pass errors to Mongoose  
    }  
});  

// Method to compare a password against the hashed password  
AdminSchema.methods.comparePassword = async function(candidatePassword) {  
    return await bcrypt.compare(candidatePassword, this.password);  
};  


const AdminsModel = mongoose.models.admins || mongoose.model('admins', AdminSchema);  

export default AdminsModel;