import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Kidzee Backend Running");
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/enquiry", async (req, res) => {
  try {
    const { parentName, childName, phone, email, message } = req.body;
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Enquiry Submission",
      html: `
        <h2>New Enquiry Form</h2>
        <p><b>Parent Name:</b> ${parentName}</p>
        <p><b>Child Name:</b> ${childName}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });
    res.status(200).json({ success: true, message: "Enquiry submitted successfully" });
  } catch (error) {
    console.error("ENQUIRY ERROR:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.post("/api/campus-visit", async (req, res) => {
  try {
    const { parentName, childName, phone, email, address, date, time, notes } = req.body;
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Campus Visit Booking",
      html: `
        <h2>Campus Visit Booking</h2>
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
    res.status(200).json({ success: true, message: "Campus Visit Scheduled" });
  } catch (error) {
    console.error("CAMPUS VISIT ERROR:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.post("/api/event-enrollment", async (req, res) => {
  try {
    const { parentName, childName, phone, email, address, event, notes } = req.body;
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Event Enrollment",
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
    res.status(200).json({ success: true, message: "Event Enrollment Successful" });
  } catch (error) {
    console.error("EVENT ENROLLMENT ERROR:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});