const cors = require("cors");
const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");


const nodemailer = require('nodemailer');

const app = express();
const mongoose = require("mongoose");
const Aboutmodel = require('./models/about.js');
const Admin_routes = require("./routes/Admin_routes.js");

app.use(cors({
  origin: "http://localhost:5173", // Replace with your frontend URL
  credentials: true, // Allows sending cookies & authentication headers
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", async () => {
    console.log("Connected to DB");
    // await loadDummyData();

});

app.use(express.json());
// const subscribersRouter = require('./routes/subscribers');
// app.use('/subscribers',subscribersRouter);

app.listen(3000, () => console.log("Server is started"));
app.use("/admin", Admin_routes);

// const loadDummyData = async () => {
//   try {
//     const dummyData = {
//       job_heading: "ma n ",
//       about_text: "Abilathutan da",
//       time_line: [
//         ["X000","nigga 1", "1","nigga goes to fererirst internship","1"],
//         ["2Y000","dddnigga 2", "2","nigga ffgoes to second internship","2"],
//         ["3ddd000","niffffgga 3", "3","niggafff goes to third internship","3"],
//       ],
//     };

//     await Aboutmodel.create(dummyData);
//     console.log("Dummy data inserted successfully!");
//   } catch (error) {
//     console.error("Error inserting dummy data:", error);
//   }
// };
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
      user: "sjabezsam@gmail.com", // Your email address
      pass: process.env.EMAIL_PASS, // Your email app password
  },
});

app.use('/uploads', express.static('uploads'));

app.get("/", async (req, res) => {
    try {
      const latestData = await Aboutmodel.findOne().sort({ _id: -1 }); // Find latest document
      if (!latestData) {
        return res.status(404).json({ message: "No data found" });
      }
      res.json(latestData);
    } catch (error) {
      console.error("Error fetching latest portfolio data:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/", async (req, res) => {
    console.log("Received form data:", req.body); // Debugging log

    try {
        const emailContent = `
            <h1>Email from ${req.body.name}</h1>
            <p><strong>Name:</strong> ${req.body.name}</p>
            <p><strong>Email:</strong> ${req.body.email}</p>
            <p><strong>Message:</strong></p>
            <p>${req.body.message || "No message provided."}</p>
        `;

        const info = await transporter.sendMail({
            from: `"${req.body.name}" <sjabezsam@gmail.com>`, // Fixed sender
            to: "sjabezsam@gmail.com", // Recipient email
            subject: `Email from ${req.body.name}`, // Subject line
            html: emailContent, // Send HTML formatted content
        });

        console.log(`Message sent: ${info.messageId}`);
        res.send('Email sent successfully!');
    } catch (error) {
        console.error(`Error sending email: ${error.message}`);
        res.status(500).send('Failed to send email.');
    }
});

