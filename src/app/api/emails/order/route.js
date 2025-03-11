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
      itemsNames,
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
    if (itemsNames && Array.isArray(itemsNames)) {
      itemsHtml = `<ul style="
                                            list-style-type: none;
                                            padding: 0;
                                            margin: 0;

                                        ">`;
      itemsNames.forEach((item) => {
        const itemName = item.name ? item.name : `Product ID: ${item.product}`;
        itemsHtml += `<li style="color: #808080;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                                            ">${itemName}</li>`;
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
          ${billingAddress.address1}<br/>
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
      `Your Modulixo Order Has Been Received!`,
      `
        <table width="640"
    style="border-collapse: collapse; margin: 0 auto;  font-family: Roboto, sans-serif;border: none;background: #141316;">
    <thead style="border: none;">
        <tr style="border: none;">
            <td style="border: none;">
                <img style="width: 100%;display: block;" src="https://modulixo.com/images/email_header.png"
                    alt="Header" />
            </td>
        </tr>
    </thead>
    <tbody style="border: none;">
        <tr style="border: none;">
            <td style="padding: 40px 40px 0 40px;background: #141316;border: none;">
                <h2 style="color: #FFF;
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin-bottom: 40px;">Your Order Has Been Accepted - #${orderNumber}</h2>
                <p style="color: #808080;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;">Dear ${customerName},</p>
                <p style="color: #808080;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;">
                    We're happy to confirm that we have received and accepted your order! Our team is committed to
                    delivering exceptional quality and ensuring your complete satisfaction.</p>
                <p style="color: #808080;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;">
                    To proceed, we will soon send you the bank details for payment. Once we receive your payment, we
                    will begin processing your order immediately.</p>
                <h3 style="color: #FFF;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin: 40px 0 0 0;">
                    Here are the details of your order:
                </h3>

            </td>
        </tr>
        <tr style="border: none;">
            <td style="padding: 20px 40px 40px 40px;background: #141316;border: none;">
                <table style="width:100%;border-collapse: collapse;border:none;">
                    <tr style="border: none;">
                        <th style="color: #FFF;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                        border-right: 1px solid rgba(255, 255, 255, 0.05);
                        background: #363538;
                        padding: 12px;
                        border-top-left-radius: 16px;
                        text-align: left;
                        width: 50%;
                        ">Order Details</th>
                        <th style="color: #FFF;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                        background: #363538;
                        padding: 12px;
                        border-top-right-radius: 16px;
                        text-align: left;
                        width: 50%;
                        ">Information</th>

                    </tr>
                    <tr>
                        <td style="color: #808080;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        border: none;
                        border-right: 1px solid rgba(255, 255, 255, 0.05);
                        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                        background: rgba(255, 255, 255, 0.05);
                        padding: 12px;
                        text-align: left;
                        width: 50%;
                        ">Order Number</td>
                        <td style="color: #808080;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        border: none;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                        background: rgba(255, 255, 255, 0.05);
                        padding: 12px;
                        text-align: left;
                        width: 50%;
                        ">${orderNumber}</td>
                    </tr>
                    <tr>
                        <td style="color: #808080;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        border: none;
                        border-right: 1px solid rgba(255, 255, 255, 0.05);
                        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                        background: rgba(255, 255, 255, 0.05);
                        padding: 12px;
                        text-align: left;
                        width: 50%;
                        ">Order Date</td>
                        <td style="color: #808080;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        border: none;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                        background: rgba(255, 255, 255, 0.05);
                        padding: 12px;
                        text-align: left;
                        width: 50%;
                        ">${orderDate}</td>
                    </tr>
                    <tr>
                        <td style="color: #808080;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        border: none;
                        border-right: 1px solid rgba(255, 255, 255, 0.05);
                        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                        background: rgba(255, 255, 255, 0.05);
                        padding: 12px;
                        text-align: left;
                        width: 50%;
                        ">Description</td>
                        <td style="color: #808080;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        border: none;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                        background: rgba(255, 255, 255, 0.05);
                        padding: 12px;
                        text-align: left;
                        width: 50%;
                        ">${itemsHtml}</td>
                    </tr>
                    <tr>
                        <td style="color: #808080;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        border: none;
                        border-right: 1px solid rgba(255, 255, 255, 0.05);
                        background: rgba(255, 255, 255, 0.05);
                        padding: 12px;
                        text-align: left;
                        width: 50%;
                        border-bottom-left-radius: 16px;
                        ">Total Amount Due</td>
                        <td style="color: #808080;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                        border: none;
                        background: rgba(255, 255, 255, 0.05);
                        padding: 12px;
                        text-align: left;
                        width: 50%;
                        border-bottom-right-radius: 16px;
                        ">${total}</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr style="border: none;">
            <td style="padding: 0 40px 40px 40px;background: #141316;border: none;">

                <p style="color: #808080;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;">
                    To avoid delays, please complete the payment as soon as possible. Feel free to contact us if you
                    have any questions or need assistance.<br><br>

                    Thank you for choosing Modulixo - we're excited to bring your vision to life!</p>
                <h3 style="color: #FFF;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin: 40px 0 20px 0;">
                    Best regards,<br>
                    The Modulixo Team
                </h3>
            </td>
        </tr>
    </tbody>
    <tfoot
        style="background-color: #0B0B0E; background-image: url(https://modulixo.com/images/email_footer.png);background-position: center right; background-size: cover;">
        <tr>
            <td style="padding: 50px 40px;">
                <table>
                    <tr>
                        <td style="width: 100px; padding: 0 8px;vertical-align: baseline;">
                            <p style="color: #808080;
                            font-size: 12px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: normal;">Phone</p>
                            <p style="margin: 0;">
                                <a href="tel: +48573589252" style="color: #FFF;
                                font-size: 12px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: normal;"> +48573589252</a>
                            </p>
                        </td>
                        <td style="width: 100px; padding: 0 8px;vertical-align: baseline;">
                            <p style="color: #808080;
                            font-size: 12px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: normal;">Email</p>
                            <p style="margin: 0;">
                                <a href="mailto:info@modulixo.com" style="color: #FFF;
                                font-size: 12px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: normal;">info@modulixo.com</a>
                            </p>
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
