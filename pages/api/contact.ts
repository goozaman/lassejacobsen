import { NextApiRequest, NextApiResponse } from "next";
import { Transporter, createTransport } from "nodemailer";

export default function handler(req: NextApiRequest, res: NextApiResponse<{}>) {
  const transporter: Transporter = createTransport({
    port: 465,
    host: "smtp.fastmail.com",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS,
    },
    secure: true,
  });

  const mailData = {
    from: `${req.body.name} <${req.body.email}>`,
    to: "hhlassej@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div>
    <p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200);
}
