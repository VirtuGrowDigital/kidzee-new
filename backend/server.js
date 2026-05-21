// server.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

/* =========================
   MIDDLEWARE
========================= */

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://kidzee-school.netlify.app"
    ],

    methods: ["GET", "POST"],

    credentials: true,
  })
);

app.use(express.json());

/* =========================
   TEST ROUTE
========================= */

app.get("/", (req, res) => {

  res.send("Backend Running Successfully");
});

/* =========================
   NODEMAILER
========================= */

const transporter = nodemailer.createTransport({

  host: "smtp.gmail.com",

  port: 465,

  secure: true,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* =========================
   VERIFY MAIL SERVER
========================= */

transporter.verify((error, success) => {

  if (error) {

    console.log("MAIL ERROR:");
    console.log(error);

  } else {

    console.log("MAIL SERVER READY");
  }
});

/* =========================
   ENQUIRY FORM
========================= */

app.post("/api/enquiry", async (req, res) => {

  try {

    console.log("ENQUIRY DATA:", req.body);

    const {
      parentName,
      childName,
      phone,
      email,
      message,
    } = req.body;

    // INSTANT RESPONSE

    res.status(200).json({
      success: true,
      message: "Enquiry submitted successfully",
    });

    // SEND MAIL IN BACKGROUND

    transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: "New Kidzee Enquiry Form",

      html: `
        <div style="font-family:Arial;padding:20px;">

          <h2>New Enquiry Received</h2>

          <p><strong>Parent Name:</strong> ${parentName}</p>

          <p><strong>Child Name:</strong> ${childName}</p>

          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong> ${message}</p>

        </div>
      `,
    });

  } catch (error) {

    console.log("FULL ERROR:");
    console.log(error);

    if (!res.headersSent) {

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
});

/* =========================
   CAMPUS VISIT FORM
========================= */

app.post("/api/campus-visit", async (req, res) => {

  try {

    console.log("VISIT DATA:", req.body);

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

    // INSTANT RESPONSE

    res.status(200).json({
      success: true,
      message: "Campus visit booked successfully",
    });

    // SEND MAIL IN BACKGROUND

    transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: "New Campus Visit Booking",

      html: `
        <div style="font-family:Arial;padding:20px;">

          <h2>Campus Visit Request</h2>

          <p><strong>Parent Name:</strong> ${parentName}</p>

          <p><strong>Child Name:</strong> ${childName}</p>

          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Address:</strong> ${address}</p>

          <p><strong>Date:</strong> ${date}</p>

          <p><strong>Time:</strong> ${time}</p>

          <p><strong>Notes:</strong> ${notes}</p>

        </div>
      `,
    });

  } catch (error) {

    console.log("FULL ERROR:");
    console.log(error);

    if (!res.headersSent) {

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
});

/* =========================
   EVENT ENROLLMENT FORM
========================= */

app.post("/api/event-enrollment", async (req, res) => {

  try {

    console.log("EVENT DATA:", req.body);

    const {
      parentName,
      childName,
      phone,
      email,
      address,
      event,
      notes,
    } = req.body;

    // INSTANT RESPONSE

    res.status(200).json({
      success: true,
      message: "Event registration successful",
    });

    // SEND MAIL IN BACKGROUND

    transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: "New Event Enrollment",

      html: `
        <div style="font-family:Arial;padding:20px;">

          <h2>Event Enrollment</h2>

          <p><strong>Parent Name:</strong> ${parentName}</p>

          <p><strong>Child Name:</strong> ${childName}</p>

          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Address:</strong> ${address}</p>

          <p><strong>Selected Event:</strong> ${event}</p>

          <p><strong>Notes:</strong> ${notes}</p>

        </div>
      `,
    });

  } catch (error) {

    console.log("FULL ERROR:");
    console.log(error);

    if (!res.headersSent) {

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
});

/* =========================
   SERVER
========================= */

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);
});