import { NextResponse } from "next/server";
const { google } = require("googleapis");

function makeBody(to, from, subject, message, attachments = []) {
  let email = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: multipart/mixed; boundary="boundary"`,
    "",
    "--boundary",
    `Content-Type: text/html; charset=UTF-8`,
    "",
    message,
  ].join("\n");

  attachments.forEach(({ filename, mimeType, data }) => {
    email += `
--boundary
Content-Type: ${mimeType}
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename="${filename}"

${data}`;
  });

  email += "\n--boundary--";
  return Buffer.from(email)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function POST(request) {
  try {
    const bodyJSON = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      preferredContactMethod,
      serviceNeed,
      otherService,
      projectType,
      projectDescription,
      estimatedBudget,
      projectDeadline,
      urgencyLevel,
      fileFormats,
      revisionsProcess,
      freeConsultation,
      reference,
      type,
    } = bodyJSON;

    const emailContent = `
      <h2>New Request from Contact Form</h2>
      <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Preferred Contact Method:</strong> ${
        preferredContactMethod || "N/A"
      }</p>
      <p><strong>Service Need:</strong> ${serviceNeed || "N/A"}</p>
      ${
        serviceNeed === "Other"
          ? `<p><strong>Other Service:</strong> ${otherService || "N/A"}</p>`
          : ""
      }
      <p><strong>Project Type:</strong> ${projectType || "N/A"}</p>
      <p><strong>Project Description:</strong> ${
        projectDescription || "N/A"
      }</p>
      <p><strong>Estimated Budget:</strong> ${estimatedBudget || "N/A"}</p>
      <p><strong>Project Deadline:</strong> ${
        projectDeadline ? new Date(projectDeadline).toLocaleDateString() : "N/A"
      }</p>
      <p><strong>Urgency Level:</strong> ${urgencyLevel || "N/A"}</p>
      <p><strong>Preferred File Formats:</strong> ${
        fileFormats && fileFormats.length ? fileFormats.join(", ") : "N/A"
      }</p>
      <p><strong>Revisions & Feedback Process:</strong> ${
        revisionsProcess || "N/A"
      }</p>
      <p><strong>Free Consultation:</strong> ${freeConsultation || "N/A"}</p>
      <p><strong>Type:</strong> ${type || "N/A"}</p>
    `;

    // Налаштовуємо OAuth2 для Gmail API.
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.EMAIL_CLIENT_ID,
      process.env.EMAIL_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );
    oauth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();
    if (!accessToken.token) {
      throw new Error("Failed to generate access token.");
    }

    const attachments = [];
    if (reference) {
      attachments.push(reference);
    }

    const gmail = google.gmail({ version: "v1", auth: oauth2Client });
    const adminEmailBody = makeBody(
      process.env.EMAIL_USER,
      process.env.EMAIL_USER,
      "New Request from Contact Form",
      emailContent,
      attachments
    );

    await gmail.users.messages.send({
      userId: "me",
      resource: { raw: adminEmailBody },
    });

    return NextResponse.json({ message: "Request sent successfully." });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Failed to send the request.", error: error.message },
      { status: 500 }
    );
  }
}
