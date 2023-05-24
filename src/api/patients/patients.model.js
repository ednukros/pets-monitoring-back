const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema(
    {
        "petName": {
            type: String,
            
        },
        "specie": {
            type: String,
            // enum: [
            //     'dog',
            //     'cat',
            // ]
        },
        "owner": {
            type: String,
            
        },
        "email": {
            type: String,
            
        },
        "symptoms": {
            type: String,
            
        },
        
        "treatment": {
            type: String,
            
        },
        "appointment": {
            type: String,
            
        },
       
    }
)

const Patient = mongoose.model("patients", patientSchema);

module.exports = Patient;