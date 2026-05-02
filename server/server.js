import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
    origin: "https://react-developer-portfolio.onrender.com",
    methods: ["GET", "POST"],
    credentials: true
}));

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

const contactSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(7).max(20).optional(),
    message: z.string().min(10).max(1000)
});

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.error("Email config error:", error);
    } else {
        console.log("Ready to Send");
    }
});

app.get("/contact", (req, res) => {
    res.send("GET works — use POST for form");
});

app.post("/contact", (req, res) => {
    console.log("Contact route hit");

    const result = contactSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            code: 400,
            status: "Invalid input",
            errors: result.error.issues
        });
    }

    const { firstName, lastName, email, phone, message } = result.data;
    const name = `${firstName} ${lastName}`;

    const mail = {
        from: process.env.EMAIL_USER,
        to: "tesla.a.lyon@gmail.com",
        subject: "Contact Form Submission - Portfolio",
        replyTo: email,
        html: `
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone || "N/A"}</p>
            <p><b>Message:</b> ${message}</p>
        `,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.error("MAIL ERROR:", error);
            return res.status(500).json({
                code: 500,
                status: "Email failed"
            });
        }

        res.json({ code: 200, status: "Message Sent" });
    });
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server Running");
});