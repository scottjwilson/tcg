import { NextApiRequest, NextApiResponse } from "next";
import mail from "@sendgrid/mail";

mail.setApiKey(
  "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"
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const body = JSON.parse(req.body);
      console.log(body);

      const message = `
      Name: ${body.name}
      `;

      await mail.send({
        to: "scottjames48@gmail.com",
        from: "hi@scottwil.com",
        subject: "New message from `${message.Name}`",
        text: message,
      });
      res.status(200).json({ status: "Ok" });
    } catch (error) {
      return res.status(500).json({ message: "Error submitting form" });
    }
  }
}
