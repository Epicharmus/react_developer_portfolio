import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());

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

    const name = `${req.body.firstName} ${req.body.lastName}`;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;

    const mail = {
        from: process.env.EMAIL_USER,   // ✅ important fix
        to: "tesla.a.lyon@gmail.com",
        subject: "Contact Form Submission - Portfolio",
        replyTo: email,
        html: `
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
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