const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema(
    {
        "name": {
            type: String,
            
        },
        "specie": {
            type: [String],
            enum: [
                'Dog',
                'Cat',
            ]
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