import React from "react";

const ClientRequestEmail = ({ userName }) => {
  return (
    <table
      width="640"
      style="border-collapse: collapse; margin: 0 auto;  font-family: Roboto, sans-serif;border: none;background: #141316;"
    >
      <thead style="border: none;">
        <tr style="border: none;">
          <td style="border: none;">
            <img
              style="width: 100%;display: block;"
              src="https://modulixo.com/images/email_header.png"
              alt="Header"
            />
          </td>
        </tr>
      </thead>
      <tbody style="border: none;">
        <tr style="border: none;">
          <td style="padding: 40px;background: #141316;border: none;">
            <h2
              style="color: #FFF;
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin-bottom: 40px;"
            >
              We've Received Your Request - Modulixo
            </h2>
            <p
              style="color: #808080;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;"
            >
              Dear ${userName},
            </p>
            <p
              style="color: #808080;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;"
            >
              Thank you for choosing Modulixo for your creative needs! Your
              service request has been successfully received, and our team is
              now reviewing your details.
            </p>
            <h3
              style="color: #FFF;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin: 40px 0 20px 0;"
            >
              What’s Next?
            </h3>
            <p
              style="color: #808080;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;"
            >
              We'll contact you soon to discuss your project and ensure we
              tailor our services to your needs.
              <br />
              <br />
              If there's anything else you'd like to add or clarify, feel free
              to let us know. We'd love to hear more about your vision!
              <br />
              <br />
              We appreciate the opportunity to work with you and look forward to
              bringing your ideas to life.
            </p>
            <h3
              style="color: #FFF;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin: 40px 0 20px 0;"
            >
              Best regards,
              <br />
              The Modulixo Team
            </h3>
          </td>
        </tr>
      </tbody>
      <tfoot style="background-color: #0B0B0E; background-image: url(https://modulixo.com/images/email_footer.png);background-position: center right; background-size: cover;">
        <tr>
          <td style="padding: 50px 40px;">
            <table>
              <tr>
                <td style="width: 100px; padding: 0 8px;vertical-align: baseline;">
                  <p
                    style="color: #808080;
                            font-size: 12px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: normal;"
                  >
                    Phone
                  </p>
                  <p style="margin: 0;">
                    <a
                      href="tel: +48573589252"
                      style="color: #FFF;
                                font-size: 12px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: normal;"
                    >
                      {" "}
                      +48573589252
                    </a>
                  </p>
                </td>
                <td style="width: 100px; padding: 0 8px;vertical-align: baseline;">
                  <p
                    style="color: #808080;
                            font-size: 12px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: normal;"
                  >
                    Email
                  </p>
                  <p style="margin: 0;">
                    <a
                      href="mailto:info@modulixo.com"
                      style="color: #FFF;
                                font-size: 12px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: normal;"
                    >
                      info@modulixo.com
                    </a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ClientRequestEmail;
