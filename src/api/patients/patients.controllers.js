const Patient = require("./patients.model")

//GET
const indexGet = async (req, res, next) => {

    try {
        const patients = await Patient.find()
        return res.status(200).json(patients);
    } catch (error) {
        return next(error);
    }
};

//POST
const createPost = async (req, res, next) => {

    try {
        
        console.log(req.body);

        const patientToBeCreated = new Patient(req.body);

        const created = await patientToBeCreated.save();

        return res.status(201).json(created);

    } catch (error) {
        
        return next(error);

    }
};


//EDIT

const editPut = async(req, res, next) => {
    try {
        const { id } = req.params; // req.params.id
        const fields = {...req.body};
        const options = { new: true };
        console.log('fields en patients', options);
        const edited = await Patient.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited);
    }
    catch(error) {
        return next(error);
    }
};

//DELETE
const deletePatient = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await Patient.deleteOne({ _id: id });
        if (deleted.deletedCount) {
            return res.status(200).json("Patient Deleted");
        } else {
            return res.status(200).json("Patient not found");
        }
    } catch (error) {
        return next(error);
    }
};
const getByName = async (req, res, next) => {
    try {
        const { name } = req.params;
        const found = await Patient.findById(name);
        return res.status(200).json(found);
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    indexGet, //read
    createPost, //Create
    editPut,//update
    deletePatient, //delete
    getByName
}
