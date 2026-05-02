import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { z } from "zod";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
    origin: "https://teslalyon.com",
    methods: ["GET", "POST"],
    credentials: true
}));

const resend = new Resend(process.env.RESEND_API_KEY);

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);
console.log("RESEND KEY:", !!process.env.RESEND_API_KEY);

const contactSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(7).max(20).optional(),
    message: z.string().min(10).max(1000)
});

app.get("/contact", (req, res) => {
    res.send("GET works — use POST for form");
});

app.post("/contact", async (req, res) => {
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

    try {
        await resend.emails.send({
            from: "contact@contact.teslalyon.com",
            to: "tesla.a.lyon@gmail.com",
            subject: "Contact Form Submission - Portfolio",
            reply_to: email,
            html: `
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Phone:</b> ${phone || "N/A"}</p>
                <p><b>Message:</b> ${message}</p>
            `,
        });

        return res.json({
            code: 200,
            status: "Message Sent"
        });

    } catch (error) {
        console.error("EMAIL ERROR:", error);

        return res.status(500).json({
            code: 500,
            status: "Email failed"
        });
    }
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server Running");
});