// server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const studentRoutes = require("./routes/studentRoutes");
const studentRoutes_cse_II = require("./routes/studentRoutes-cse-II");
const studentRoutes_cse_III = require("./routes/studentRoutes-cse-III");
const studentRoutes_cse_IV = require("./routes/studentRoutes-cse-IV");
const studentRoutes_it_I = require("./routes/studentRoutes-it-I");
const studentRoutes_it_II = require("./routes/studentRoutes-it-II");
const studentRoutes_it_III = require("./routes/studentRoutes-it-III");
const studentRoutes_it_IV = require("./routes/studentRoutes-it-IV");
const studentRoutes_aids_I = require("./routes/studentRoutes-aids-I");
const studentRoutes_aids_II = require("./routes/studentRoutes-aids-II");
const studentRoutes_aids_III = require("./routes/studentRoutes-aids-III");
const studentRoutes_aids_IV = require("./routes/studentRoutes-aids-IV");
const studentRoutes_eee_I = require("./routes/studentRoutes-eee-I");
const studentRoutes_eee_II = require("./routes/studentRoutes-eee-II");
const studentRoutes_eee_III = require("./routes/studentRoutes-eee-III");
const studentRoutes_eee_IV = require("./routes/studentRoutes-eee-IV");
const studentRoutes_ece_I = require("./routes/studentRoutes-ece-I");
const studentRoutes_ece_II = require("./routes/studentRoutes-ece-II");
const studentRoutes_ece_III = require("./routes/studentRoutes-ece-III");
const studentRoutes_ece_IV = require("./routes/studentRoutes-ece-IV");
const studentRoutes_mech_I = require("./routes/studentRoutes-mech-I");
const studentRoutes_mech_II = require("./routes/studentRoutes-mech-II");
const studentRoutes_mech_III = require("./routes/studentRoutes-mech-III");
const studentRoutes_mech_IV = require("./routes/studentRoutes-mech-IV");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use("/api/users", userRoutes); // Mount user routes under /api/users
app.use("/api/student-cse-I", studentRoutes); // Mount student routes under /api/student-cse-I
app.use("/api/student-cse-II", studentRoutes_cse_II);
app.use("/api/student-cse-III", studentRoutes_cse_III);
app.use("/api/student-cse-IV", studentRoutes_cse_IV);
app.use("/api/student-it-I", studentRoutes_it_I);
app.use("/api/student-it-II", studentRoutes_it_II);
app.use("/api/student-it-III", studentRoutes_it_III);
app.use("/api/student-it-IV", studentRoutes_it_IV);
app.use("/api/student-aids-I", studentRoutes_aids_I);
app.use("/api/student-aids-II", studentRoutes_aids_II);
app.use("/api/student-aids-III", studentRoutes_aids_III);
app.use("/api/student-aids-IV", studentRoutes_aids_IV);
app.use("/api/student-eee-I", studentRoutes_eee_I);
app.use("/api/student-eee-II", studentRoutes_eee_II);
app.use("/api/student-eee-III", studentRoutes_eee_III);
app.use("/api/student-eee-IV", studentRoutes_eee_IV);
app.use("/api/student-ece-I", studentRoutes_ece_I);
app.use("/api/student-ece-II", studentRoutes_ece_II);
app.use("/api/student-ece-III", studentRoutes_ece_III);
app.use("/api/student-ece-IV", studentRoutes_ece_IV);
app.use("/api/student-mech-I", studentRoutes_mech_I);
app.use("/api/student-mech-II", studentRoutes_mech_II);
app.use("/api/student-mech-III", studentRoutes_mech_III);
app.use("/api/student-mech-IV", studentRoutes_mech_IV);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`); 
});