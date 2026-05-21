import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

/* ======================
   MIDDLEWARE
====================== */

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

/* ======================
   TEST ROUTE
====================== */

app.get("/", (req, res) => {
  res.send("Backend Running");
});

/* ======================
   MAIL CONFIG
====================== */

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ======================
   ENQUIRY FORM
====================== */

app.post("/api/enquiry", async (req, res) => {

  try {

    const {
      parentName,
      childName,
      phone,
      email,
      message,
    } = req.body;

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: "New Enquiry",

      html: `
        <h2>New Enquiry</h2>

        <p><b>Parent:</b> ${parentName}</p>
        <p><b>Child:</b> ${childName}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

/* ======================
   CAMPUS VISIT
====================== */

app.post("/api/campus-visit", async (req, res) => {

  try {

    const {
      parentName,
      childName,
      phone,
      email,
      address,
      date,
      time,
      notes,
    } = req.body;

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: "Campus Visit",

      html: `
        <h2>Campus Visit</h2>

        <p><b>Parent:</b> ${parentName}</p>
        <p><b>Child:</b> ${childName}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${time}</p>
        <p><b>Notes:</b> ${notes}</p>
      `,
    });

    res.status(200).json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

/* ======================
   EVENT ENROLLMENT
====================== */

app.post("/api/event-enrollment", async (req, res) => {

  try {

    const {
      parentName,
      childName,
      phone,
      email,
      address,
      event,
      notes,
    } = req.body;

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: "Event Enrollment",

      html: `
        <h2>Event Enrollment</h2>

        <p><b>Parent:</b> ${parentName}</p>
        <p><b>Child:</b> ${childName}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>Event:</b> ${event}</p>
        <p><b>Notes:</b> ${notes}</p>
      `,
    });

    res.status(200).json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

/* ======================
   SERVER
====================== */

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});