import { NextResponse } from "next/server";
const { google } = require("googleapis");

function makeBody(to, from, subject, message) {
  const email = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=UTF-8`,
    "",
    message.trim(),
  ].join("\r\n");

  return Buffer.from(email)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function POST(request) {
  try {
    const bodyJSON = await request.json();

    const { name, email, phone, message, type } = bodyJSON;

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

    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    const adminEmailBody = makeBody(
      process.env.EMAIL_USER,
      process.env.EMAIL_USER,
      `New Request from contact form`,
      `
      <p><b>Full Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Message:</b> ${message || "N/A"}</p>
      `
    );

    let emailBody;
    let emailSubject;
    if (type === "default") {
      emailSubject = "Your Request Received";
      emailBody = `
      <table width="640" style="border-collapse: collapse; margin: 0 auto;  font-family: Roboto, sans-serif;">
    <thead>
        <tr>
            <td>
                <img style="width: 100%" src="https://3dellium.com/images/email_header.png" alt="Header" />
            </td>
        </tr>
    </thead>
    <tbody style="
    padding: 0 8px;
    display: block;
    ">
        <tr>
            <td style="padding: 8px;border-radius: 16px;background: #EFF3F0;">
                <table style="width: 100%;">
                    <td style="padding: 36px; color:#0A0A0A;border-radius: 16px;background: #D4DDD7;">
                        <h2 style="text-align: left; font-size: 20px;">Dear ${name},</h2>
                        <p style="font-size: 16px; line-height: 1.3;">Thank you for reaching out to 3Dellium! We’ve
                            successfully received your request and our team is already on it. Soon, one of our crafters
                            will get
                            in touch with you to gather more details and assist you further.</p>
                        <p style="font-size: 16px; line-height: 1.3;">If you have any urgent questions, feel free to
                            reply to
                            this email.

                        </p>
                        <p style="font-size: 16px; line-height: 1.3;">We look forward to helping you bring your ideas
                            to life!
                        </p>
                        <p style="font-size: 16px; line-height: 1.3; font-weight: 600;">
                            Best regards,
                            <br>The 3DelliumTeam
                        </p>
                    </td>
                </table>
            </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td style="padding: 10px 0;"> 
                <table style="width: 100%;">
                    <tr>
                        <td style="width: 130px; padding: 0 8px;vertical-align: middle;">
                            <img width="130" height="23" src="https://3dellium.com/images/email_logo.png"
                                alt="Header" />
                        </td>
                        <td style="width: 100px; padding: 0 8px;vertical-align: baseline;">
                            <p style="color: #1D4C29;
                            font-size: 10px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 100%;">Email: </p>
                            <p style="margin: 0;">
                                <a href="tel:+34951748379" style="color: #000;
                                font-size: 10px;
                                font-style: normal;
                                font-weight: 300;
                                line-height: 120%;
                                text-decoration: none;">+34951748379</a>
                            </p>
                        </td>
                        <td style="width: 100px; padding: 0 8px;vertical-align: baseline;">
                            <p style="color: #1D4C29;
                            font-size: 10px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 100%;">Email: </p>
                            <p style="margin: 0;">
                                <a href="mailto:info@3dellium.com" style="color: #000;
                                font-size: 10px;
                                font-style: normal;
                                font-weight: 300;
                                line-height: 120%;
                                text-decoration: none;">info@3dellium.com</a>
                            </p>
                        </td>

                        <td style="width: 150px; padding: 0 8px;vertical-align: baseline;">
                            <p style="color: #1D4C29;
                            font-size: 10px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 100%;">Registration Address:</p>

                            <p style="color: #000;
                                font-size: 10px;
                                font-style: normal;
                                font-weight: 300;
                                line-height: 120%;margin: 0s;">Calle Aguamarina, S/N - Local 1-2, Marbella, 29670,
                                Malaga</p>

                        </td>

                    </tr>
                </table>
            </td>
        </tr>
    </tfoot>
</table>
      `;
    } else if (type === "3d-modelling") {
      emailSubject = "Your 3D Modelling Request Received";
      emailBody = `
      <table width="640" style="border-collapse: collapse; margin: 0 auto;  font-family: Roboto, sans-serif;">
    <thead>
        <tr>
            <td>
                <img style="width: 100%" src="https://3dellium.com/images/email_header.png" alt="Header" />
            </td>
        </tr>
    </thead>
    <tbody style="
    padding: 0 8px;
    display: block;
    ">
        <tr>
            <td style="padding: 8px;border-radius: 16px;background: #EFF3F0;">
                <table style="width: 100%;">
                    <td style="padding: 36px; color:#0A0A0A;border-radius: 16px;background: #D4DDD7;">
                        <h2 style="text-align: left; font-size: 20px;">Dear ${name},</h2>
                        <p style="font-size: 16px; line-height: 19px;">Thank you for reaching out to 3Dellium! We've
                            successfully received your request and our team is already on it. Soon, one of our crafters
                            will get
                            in touch with you to gather more details and assist you further.</p>
                        <p style="font-size: 16px; line-height: 19px;">If you have any urgent questions, feel free to
                            reply to
                            this email.

                        </p>
                        <p style="font-size: 16px; line-height: 19px;">We look forward to helping you bring your ideas
                            to life!
                        </p>
                        <p style="font-size: 16px; line-height: 19px; font-weight: 600;">
                            Best regards,
                            <br>The 3DelliumTeam
                        </p>
                    </td>
                </table>
            </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td style="padding: 10px 0;">
                <table style="width: 100%;">
                    <tr>
                        <td style="width: 130px; padding: 0 8px;vertical-align: middle;">
                            <img width="130" height="23" src="https://3dellium.com/images/email_logo.png"
                                alt="Header" />
                        </td>
                        <td style="width: 100px; padding: 0 8px;vertical-align: baseline;">
                            <p style="color: #1D4C29;
                            font-size: 10px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 100%;">Email: </p>
                            <p style="margin: 0;">
                                <a href="tel:+34951748379" style="color: #000;
                                font-size: 10px;
                                font-style: normal;
                                font-weight: 300;
                                line-height: 120%;
                                text-decoration: none;">+34951748379</a>
                            </p>
                        </td>
                        <td style="width: 100px; padding: 0 8px;vertical-align: baseline;">
                            <p style="color: #1D4C29;
                            font-size: 10px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 100%;">Email: </p>
                            <p style="margin: 0;">
                                <a href="mailto:info@3dellium.com" style="color: #000;
                                font-size: 10px;
                                font-style: normal;
                                font-weight: 300;
                                line-height: 120%;
                                text-decoration: none;">info@3dellium.com</a>
                            </p>
                        </td>

                        <td style="width: 150px; padding: 0 8px;vertical-align: baseline;">
                            <p style="color: #1D4C29;
                            font-size: 10px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 100%;">Registration Address:</p>

                            <p style="color: #000;
                                font-size: 10px;
                                font-style: normal;
                                font-weight: 300;
                                line-height: 120%;margin: 0s;">Calle Aguamarina, S/N - Local 1-2, Marbella, 29670,
                                Malaga</p>

                        </td>

                    </tr>
                </table>
            </td>
        </tr>
    </tfoot>
</table>
      `;
    } else if (type === "animation") {
      emailSubject = "Your Animation Request Received";
      emailBody = `
      <table width="640" style="border-collapse: collapse; margin: 0 auto;  font-family: Roboto, sans-serif;">
    <thead>
        <tr>
            <td>
                <img style="width: 100%" src="https://3dellium.com/images/email_header.png" alt="Header" />
            </td>
        </tr>
    </thead>
    <tbody style="
    padding: 0 8px;
    display: block;
    ">
        <tr>
            <td style="padding: 8px;border-radius: 16px;background: #EFF3F0;">
                <table style="width: 100%;">
                    <td style="padding: 36px; color:#0A0A0A;border-radius: 16px;background: #D4DDD7;">
                        <h2 style="text-align: left; font-size: 20px;">Dear ${name},</h2>
                        <p style="font-size: 16px; line-height: 19px;">Thank you for reaching out to 3Dellium!
                            We've received your request for a custom animation, and our creative team is already on it.
                            We'll be reviewing your ideas and will contact you soon to discuss the details and next
                            steps.</p>

                        <p style="font-size: 16px; line-height: 19px;">If you have any additional thoughts or updates,
                            feel free to reply to this email.</p>

                        <p style="font-size: 16px; line-height: 19px;">Let's bring your vision to life!</p>

                        <p style="font-size: 16px; line-height: 19px; font-weight: 600;">
                            Best regards,
                            <br>The 3DelliumTeam
                        </p>
                    </td>
                </table>
            </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td style="padding: 10px 0;">
                <table style="width: 100%;">
                    <tr>
                        <td style="width: 130px; padding: 0 8px;vertical-align: middle;">
                            <img width="130" height="23" src="https://3dellium.com/images/email_logo.png"
                                alt="Header" />
                        </td>
                        <td style="width: 100px; padding: 0 8px;vertical-align: baseline;">
                            <p style="color: #1D4C29;
                            font-size: 10px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 100%;">Email: </p>
                            <p style="margin: 0;">
                                <a href="tel:+34951748379" style="color: #000;
                                font-size: 10px;
                                font-style: normal;
                                font-weight: 300;
                                line-height: 120%;
                                text-decoration: none;">+34951748379</a>
                            </p>
                        </td>
                        <td style="width: 100px; padding: 0 8px;vertical-align: baseline;">
                            <p style="color: #1D4C29;
                            font-size: 10px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 100%;">Email: </p>
                            <p style="margin: 0;">
                                <a href="mailto:info@3dellium.com" style="color: #000;
                                font-size: 10px;
                                font-style: normal;
                                font-weight: 300;
                                line-height: 120%;
                                text-decoration: none;">info@3dellium.com</a>
                            </p>
                        </td>

                        <td style="width: 150px; padding: 0 8px;vertical-align: baseline;">
                            <p style="color: #1D4C29;
                            font-size: 10px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 100%;">Registration Address:</p>

                            <p style="color: #000;
                                font-size: 10px;
                                font-style: normal;
                                font-weight: 300;
                                line-height: 120%;margin: 0s;">Calle Aguamarina, S/N - Local 1-2, Marbella, 29670,
                                Malaga</p>

                        </td>

                    </tr>
                </table>
            </td>
        </tr>
    </tfoot>
</table>
      `;
    } else if (type === "video-production") {
      emailSubject = "Your Video Production Request  Received";
      emailBody = `
      <table width="640" style="border-collapse: collapse; margin: 0 auto;  font-family: Roboto, sans-serif;">
    <thead>
        <tr>
            <td>
                <img style="width: 100%" src="https://3dellium.com/images/email_header.png" alt="Header" />
            </td>
        </tr>
    </thead>
    <tbody style="
    padding: 0 8px;
    display: block;
    ">
        <tr>
            <td style="padding: 8px;border-radius: 16px;background: #EFF3F0;">
                <table style="width: 100%;">
                    <td style="padding: 36px; color:#0A0A0A;border-radius: 16px;background: #D4DDD7;">
                        <h2 style="text-align: left; font-size: 20px;">Dear ${name},</h2>
                        <p style="font-size: 16px; line-height: 19px;">
                            Thank you for reaching out to 3Dellium!
                            We've received your request for video production, and we're excited to help bring your ideas
                            to life.</p>

                        <p style="font-size: 16px; line-height: 19px;">Our team is reviewing the details, and we'll be
                            in touch soon to discuss your project further and guide you through the next steps.</p>

                        <p style="font-size: 16px; line-height: 19px;">If you have any questions in the meantime, feel
                            free to reply to this email. We're here to assist you!</p>

                        <p style="font-size: 16px; line-height: 19px;">Looking forward to working with you!</p>

                        <p style="font-size: 16px; line-height: 19px; font-weight: 600;">
                            Best regards,
                            <br>The 3DelliumTeam
                        </p>
                    </td>
                </table>
            </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td style="padding: 10px 0;">
                <table style="width: 100%;">
                    <tr>
                        <td style="width: 130px; padding: 0 8px;vertical-align: middle;">
                            <img width="130" height="23" src="https://3dellium.com/images/email_logo.png"
                                alt="Header" />
                        </td>
                        <td style="width: 100px; padding: 0 8px;vertical-align: baseline;">
                            <p style="color: #1D4C29;
                            font-size: 10px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 100%;">Email: </p>
                            <p style="margin: 0;">
                                <a href="tel:+34951748379" style="color: #000;
                                font-size: 10px;
                                font-style: normal;
                                font-weight: 300;
                                line-height: 120%;
                                text-decoration: none;">+34951748379</a>
                            </p>
                        </td>
                        <td style="width: 100px; padding: 0 8px;vertical-align: baseline;">
                            <p style="color: #1D4C29;
                            font-size: 10px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 100%;">Email: </p>
                            <p style="margin: 0;">
                                <a href="mailto:info@3dellium.com" style="color: #000;
                                font-size: 10px;
                                font-style: normal;
                                font-weight: 300;
                                line-height: 120%;
                                text-decoration: none;">info@3dellium.com</a>
                            </p>
                        </td>

                        <td style="width: 150px; padding: 0 8px;vertical-align: baseline;">
                            <p style="color: #1D4C29;
                            font-size: 10px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 100%;">Registration Address:</p>

                            <p style="color: #000;
                                font-size: 10px;
                                font-style: normal;
                                font-weight: 300;
                                line-height: 120%;margin: 0s;">Calle Aguamarina, S/N - Local 1-2, Marbella, 29670,
                                Malaga</p>

                        </td>

                    </tr>
                </table>
            </td>
        </tr>
    </tfoot>
</table>
      `;
    } else if (type === "ui-ux-design") {
      emailSubject = "Your UI/UX Design Request Received";
      emailBody = `
      <table width="640" style="border-collapse: collapse; margin: 0 auto;  font-family: Roboto, sans-serif;">
    <thead>
        <tr>
            <td>
                <img style="width: 100%" src="https://3dellium.com/images/email_header.png" alt="Header" />
            </td>
        </tr>
    </thead>
    <tbody style="
    padding: 0 8px;
    display: block;
    ">
        <tr>
            <td style="padding: 8px;border-radius: 16px;background: #EFF3F0;">
                <table style="width: 100%;">
                    <td style="padding: 36px; color:#0A0A0A;border-radius: 16px;background: #D4DDD7;">
                        <h2 style="text-align: left; font-size: 20px;">Dear ${name},</h2>
                        <p style="font-size: 16px; line-height: 19px;">
                            Thank you for contacting 3Dellium!
                            We're excited to hear about your project and explore how we can create a seamless and
                            impactful UI/UX design tailored to your needs.</p>

                        <p style="font-size: 16px; line-height: 19px;">
                            Our team has received your request and will review it carefully. One of our experts will
                            contact you shortly to discuss the details and next steps.
                        </p>

                        <p style="font-size: 16px; line-height: 19px;">In the meantime, if you have any additional
                            information or questions, feel free to reply to this email or contact us directly.</p>

                        <p style="font-size: 16px; line-height: 19px;">We look forward to helping you bring your vision
                            to life!</p>

                        <p style="font-size: 16px; line-height: 19px; font-weight: 600;">
                            Best regards,
                            <br>The 3DelliumTeam
                        </p>
                    </td>
                </table>
            </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td style="padding: 10px 0;">
                <table style="width: 100%;">
                    <tr>
                        <td style="width: 130px; padding: 0 8px;vertical-align: middle;">
                            <img width="130" height="23" src="https://3dellium.com/images/email_logo.png"
                                alt="Header" />
                        </td>
                        <td style="width: 100px; padding: 0 8px;vertical-align: baseline;">
                            <p style="color: #1D4C29;
                            font-size: 10px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 100%;">Email: </p>
                            <p style="margin: 0;">
                                <a href="tel:+34951748379" style="color: #000;
                                font-size: 10px;
                                font-style: normal;
                                font-weight: 300;
                                line-height: 120%;
                                text-decoration: none;">+34951748379</a>
                            </p>
                        </td>
                        <td style="width: 100px; padding: 0 8px;vertical-align: baseline;">
                            <p style="color: #1D4C29;
                            font-size: 10px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 100%;">Email: </p>
                            <p style="margin: 0;">
                                <a href="mailto:info@3dellium.com" style="color: #000;
                                font-size: 10px;
                                font-style: normal;
                                font-weight: 300;
                                line-height: 120%;
                                text-decoration: none;">info@3dellium.com</a>
                            </p>
                        </td>

                        <td style="width: 150px; padding: 0 8px;vertical-align: baseline;">
                            <p style="color: #1D4C29;
                            font-size: 10px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 100%;">Registration Address:</p>

                            <p style="color: #000;
                                font-size: 10px;
                                font-style: normal;
                                font-weight: 300;
                                line-height: 120%;margin: 0s;">Calle Aguamarina, S/N - Local 1-2, Marbella, 29670,
                                Malaga</p>

                        </td>

                    </tr>
                </table>
            </td>
        </tr>
    </tfoot>
</table>         </td>
                            <td style="width: 150px; padding: 0 8px;">
                                <p style="color: #1D4C29;
                                font-size: 10px;
                                font-style: normal;
                                font-weight: 700;
                                line-height: 120%;">Registration Address:</p>

                                <p style="color: #000;
                                    font-size: 10px;
                                    font-style: normal;
                                    font-weight: 300;
                                    line-height: 120%;">Calle Aguamarina, S/N - Local 1-2, Marbella, 29670, Malaga</p>

                            </td>
                            <td style="width: 180px; padding: 0 8px;">
                                <p style="color: #1D4C29;
                                font-size: 10px;
                                font-style: normal;
                                font-weight: 700;
                                line-height: 120%;">Office Address: </p>

                                <p style="color: #000;
                                    font-size: 10px;
                                    font-style: normal;
                                    font-weight: 300;
                                    line-height: 120%;">Office 32, 3rd floor, Av. del Litoral, 12, Ciutat Vella, 08005
                                    Barcelona, Spain</p>

                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </tfoot>
    </table>
      `;
    }

    const clientEmailBody = makeBody(
      email,
      process.env.EMAIL_USER,
      emailSubject,
      emailBody
    );

    await gmail.users.messages.send({
      userId: "me",
      resource: { raw: adminEmailBody },
    });

    await gmail.users.messages.send({
      userId: "me",
      resource: { raw: clientEmailBody },
    });

    return NextResponse.json({ message: "Request sent successfully." });
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json(
      { message: "Failed to send the request.", error: error.message },
      { status: 500 }
    );
  }
}
