<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Inquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f9;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f9;padding:40px 16px">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#2563eb,#1d4ed8);padding:32px 40px;text-align:center">
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.5px">New Inquiry Received</h1>
              <p style="margin:6px 0 0;font-size:14px;color:rgba(255,255,255,0.85)">AFIS IT &amp; POS Solutions</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px">
              <p style="margin:0 0 20px;font-size:15px;color:#475569;line-height:1.6">A new inquiry has been submitted through the website. Details are below:</p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <!-- Name -->
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="140" style="font-size:13px;font-weight:600;color:#64748b;vertical-align:top;padding:4px 0">Full Name</td>
                        <td style="font-size:15px;color:#0f172a;font-weight:500;padding:4px 0">{{ $data['name'] ?? '—' }}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Company -->
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="140" style="font-size:13px;font-weight:600;color:#64748b;vertical-align:top;padding:4px 0">Company</td>
                        <td style="font-size:15px;color:#0f172a;font-weight:500;padding:4px 0">{{ $data['company'] ?? '—' }}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Phone -->
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="140" style="font-size:13px;font-weight:600;color:#64748b;vertical-align:top;padding:4px 0">Phone Number</td>
                        <td style="font-size:15px;color:#0f172a;font-weight:500;padding:4px 0">
                          <a href="tel:{{ $data['phone'] ?? '' }}" style="color:#2563eb;text-decoration:none">{{ $data['phone'] ?? '—' }}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Email -->
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="140" style="font-size:13px;font-weight:600;color:#64748b;vertical-align:top;padding:4px 0">Email Address</td>
                        <td style="font-size:15px;color:#0f172a;font-weight:500;padding:4px 0">
                          <a href="mailto:{{ $data['email'] ?? '' }}" style="color:#2563eb;text-decoration:none">{{ $data['email'] ?? '—' }}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Product -->
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e2e8f0">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="140" style="font-size:13px;font-weight:600;color:#64748b;vertical-align:top;padding:4px 0">Product Interested In</td>
                        <td style="font-size:15px;color:#0f172a;font-weight:500;padding:4px 0">{{ $data['product'] ?? '—' }}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Message -->
                <tr>
                  <td style="padding:10px 0">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="140" style="font-size:13px;font-weight:600;color:#64748b;vertical-align:top;padding:4px 0">Message</td>
                        <td style="font-size:15px;color:#0f172a;font-weight:500;padding:4px 0;line-height:1.6">{{ $data['message'] ?? '—' }}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <div style="height:1px;background:#e2e8f0;margin:24px 0"></div>

              <p style="margin:0;font-size:13px;color:#94a3b8;line-height:1.5">This inquiry was submitted via the AFIS website. Please follow up with the customer within 24 hours.</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;padding:20px 40px;text-align:center;border-top:1px solid #e2e8f0">
              <p style="margin:0;font-size:12px;color:#94a3b8">
                AFIS IT &amp; POS Solutions &bull; Doha, Qatar<br>
                <a href="tel:+97474761025" style="color:#2563eb;text-decoration:none">+974 7476 1025</a> &bull;
                <a href="mailto:helpdesk@afis.qa" style="color:#2563eb;text-decoration:none">helpdesk@afis.qa</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
