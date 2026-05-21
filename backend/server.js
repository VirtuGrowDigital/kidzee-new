import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

/* =========================
   CORS
========================= */

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://kidzee-school.netlify.app",
    ],

    methods: ["GET", "POST"],

    credentials: true,
  })
);

app.use(express.json());

/* =========================
   HOME ROUTE
========================= */

app.get("/", (req, res) => {

  res.send("Backend Running Successfully");
});

/* =========================
   NODEMAILER
========================= */

const transporter = nodemailer.createTransport({

  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* =========================
   ENQUIRY FORM
========================= */

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

      subject: "New Enquiry Form",

      html: `
        <h2>New Enquiry</h2>

        <p><b>Parent Name:</b> ${parentName}</p>

        <p><b>Child Name:</b> ${childName}</p>

        <p><b>Phone:</b> ${phone}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Enquiry submitted successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

/* =========================
   CAMPUS VISIT
========================= */

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

      subject: "Campus Visit Booking",

      html: `
        <h2>Campus Visit Request</h2>

        <p><b>Parent Name:</b> ${parentName}</p>

        <p><b>Child Name:</b> ${childName}</p>

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
      message: "Campus visit booked successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

/* =========================
   EVENT ENROLLMENT
========================= */

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

        <p><b>Parent Name:</b> ${parentName}</p>

        <p><b>Child Name:</b> ${childName}</p>

        <p><b>Phone:</b> ${phone}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Address:</b> ${address}</p>

        <p><b>Event:</b> ${event}</p>

        <p><b>Notes:</b> ${notes}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Event registration successful",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

/* =========================
   SERVER
========================= */

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);
});