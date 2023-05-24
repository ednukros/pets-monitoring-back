const express = require('express')
const db = require('./src/utils/db.js')
const cors = require('cors')

db.connectDB();


const patientsRoutes = require("./src/api/patients/patients.routes");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors())

app.use(express.urlencoded({
    extended: true
}));

app.use("/patients", patientsRoutes);

// non-existent routes will pass by this way
app.use('*', (req, res, next) => {
    return res.status(404).json('Unknow route, so sorryyyyyyy :(');
});

//error controller
app.use((error, req, res, next) => {

    const status = error.status || 500;
    const message = error.message || 'Ouch! Unexpected Error!';
    return res.status(status).json(message);
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
