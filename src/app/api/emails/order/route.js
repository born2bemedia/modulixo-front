// /api/order/route.js
import { NextResponse } from "next/server";
const { google } = require("googleapis");

/**
 * Helper function to create a base64url-encoded email body.
 */
function makeBody(to, from, subject, message) {
  const emailLines = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=UTF-8`,
    "", // Blank line between headers and body
    message,
  ];
  return Buffer.from(emailLines.join("\n"))
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function POST(request) {
  try {
    const bodyJSON = await request.json();

    const {
      orderNumber,
      firstName,
      lastName,
      email,
      phone,
      items,
      total,
      paymentMethod,
      billingAddress,
      notes,
    } = bodyJSON;

    const customerName =
      firstName && lastName ? `${firstName} ${lastName}` : "Valued Customer";

    const orderDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Set up OAuth2 for Gmail
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.EMAIL_CLIENT_ID,
      process.env.EMAIL_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground" // Redirect URL
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();
    if (!accessToken.token) {
      throw new Error("Failed to generate access token.");
    }

    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    let itemsHtml = "";
    if (items && Array.isArray(items)) {
      itemsHtml = `<ul style="
                                            list-style-type: none;
                                            padding: 0;
                                            margin: 0;

                                        ">`;
      items.forEach((item) => {
        const itemName = item.name ? item.name : `Product ID: ${item.product}`;
        itemsHtml += `<li style="color: #1D4C29;
                                            font-size: 16px;
                                            font-style: normal;
                                            font-weight: 700;
                                            line-height: 1.4;
                                            letter-spacing: -0.1px;
                                            margin-left: 0;
                                            ">${itemName} — Quantity: ${item.quantity}, Price: €${item.price}</li>`;
      });
      itemsHtml += `</ul>`;
    }

    const adminEmailBody = makeBody(
      process.env.EMAIL_USER,
      process.env.EMAIL_USER,
      `New Order Received: ${orderNumber}`,
      `
        <h2>New Order Received</h2>
        <p><strong>Order Number:</strong> ${orderNumber}</p>
        <p><strong>Customer:</strong> ${customerName}</p>
        <p><strong>Email:</strong> ${email || "N/A"}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod}</p>
        <h3>Billing Address</h3>
        <p>
          ${billingAddress.street}<br/>
          ${billingAddress.city}, ${billingAddress.state}<br/>
          ${billingAddress.zip}<br/>
          ${billingAddress.country}
        </p>
        <h3>Order Items</h3>
        ${itemsHtml}
        <p><strong>Total Amount:</strong> €${total}</p>
        <p><strong>Notes:</strong> ${notes || "None"}</p>
      `
    );

    const clientEmailBody = makeBody(
      email,
      process.env.EMAIL_USER,
      `Your 3Dellium Order Has Been Received!`,
      `
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
            <td style="padding: 8px;border-radius: 16px;background: #EFF3F0;width: 18%;">
                <table style="width: 100%;border-collapse:collapse;">
                    <tr>
                        <td
                            style="padding: 36px 36px 24px 36px; color:#0A0A0A;border-radius: 16px 16px 0 0;background: #D4DDD7;">
                            <h2 style="text-align: left; font-size: 20px;">Dear ${customerName},</h2>
                            <p style="font-size: 16px; line-height: 19px;">
                                Thank you for your order! We’ve successfully received your request, and we’re preparing
                                everything for you. Below, you’ll find the details of your order.</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0 36px 0 36px;background: #D4DDD7;">
                            <table style="width: 100%;border-collapse:collapse;">
                                <tr>
                                    <td style="
                                        border-radius: 16px;
                                        background: #FFF;
                                        padding: 24px;
                                        ">
                                        <p style="color: #1D4C29;
                                        margin-bottom: 16px;
                                        font-size: 16px;
                                        font-style: normal;
                                        font-weight: 600;
                                        line-height: normal;">Order Summary:</p>

                                        <table style="width: 100%;border-collapse:collapse;">
                                            <tr>
                                                <td style="color: #222;
                                                font-size: 10px;
                                                font-style: normal;
                                                font-weight: 500;
                                                line-height: 1.4;
                                                letter-spacing: -0.1px;
                                                ">Order Number:</td>
                                                <td style="color: #222;
                                                font-size: 14px;
                                                font-style: normal;
                                                font-weight: 700;
                                                line-height: 1.4;
                                                letter-spacing: -0.1px;
                                                ">${orderNumber}</td>
                                            </tr>
                                            <tr>
                                                <td style="color: #222;
                                                font-size: 10px;
                                                font-style: normal;
                                                font-weight: 500;
                                                line-height: 1.4;
                                                letter-spacing: -0.1px;
                                                ">Date:</td>
                                                <td style="color: #222;
                                                font-size: 14px;
                                                font-style: normal;
                                                font-weight: 700;
                                                line-height: 1.4;
                                                letter-spacing: -0.1px;
                                                ">${orderDate}</td>
                                            </tr>
                                            <tr>
                                                <td style="color: #222;
                                                font-size: 10px;
                                                font-style: normal;
                                                font-weight: 500;
                                                line-height: 1.4;
                                                letter-spacing: -0.1px;
                                                ">Total Amount:</td>
                                                <td style="color: #222;
                                                font-size: 14px;
                                                font-style: normal;
                                                font-weight: 700;
                                                line-height: 1.4;
                                                letter-spacing: -0.1px;
                                                ">€${total}</td>
                                            </tr>
                                        </table>

                                        <p style="color: #222;
                                        font-size: 10px;
                                        font-style: normal;
                                        font-weight: 500;
                                        line-height: normal;
                                        letter-spacing: -0.1px;
                                        margin: 8px 0 4px 0;
                                        padding-top: 8px;
                                        border-top: 1px solid #1D4C29;
                                        ">Items Ordered:</p>

                                        ${itemsHtml}

                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td
                            style="padding: 24px 36px 36px 36px; color:#0A0A0A;border-radius: 0 0 16px 16px;background: #D4DDD7;">


                            <p style="font-size: 16px; line-height: 19px;">
                                <b>Payment instructions will be sent in a separate email shortly.</b>
                                Once payment is completed, we will proceed with processing your order.
                            </p>

                            <p style="font-size: 16px; line-height: 19px;">
                                If you have any questions, feel free to contact us.
                            </p>

                            <p style="font-size: 16px; line-height: 19px; font-weight: 600;">
                                Best regards,
                                <br>The 3DelliumTeam
                            </p>
                        </td>
                    </tr>
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
      `
    );

    await gmail.users.messages.send({
      userId: "me",
      resource: { raw: adminEmailBody },
    });

    await gmail.users.messages.send({
      userId: "me",
      resource: { raw: clientEmailBody },
    });

    return NextResponse.json({ message: "Order email sent successfully." });
  } catch (error) {
    console.error("Error sending order email:", error.message);
    return NextResponse.json(
      { message: "Failed to send order email.", error: error.message },
      { status: 500 }
    );
  }
}
