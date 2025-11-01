
"use server";

import sendEmail from "@/lib/sendemail";

export async function SendContactForm(formData: FormData) {
  try {
    // Extract fields from the form
    const nom = formData.get("nom") as string;
    const prenom = formData.get("prenom") as string;
    const email = formData.get("email") as string;
    const telephone = formData.get("telephone") as string;
    const societe = formData.get("societe") as string;
    const interet = formData.get("interet") as string;
    const message = formData.get("message") as string;

    // Generate the email content
   const emailContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nouvelle demande de contact</title>
  <style>
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      background: #f8fafc;
      margin: 0;
      padding: 24px;
      color: #334155;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                  0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    .header {
      background: #BD9A68;
      padding: 24px;
      text-align: center;
    }
    .logo {
      height: 60px;
      width: auto;
      display: block;
      margin: 0 auto 16px auto;
    }
    .title {
      color: white;
      font-size: 24px;
      font-weight: 600;
      margin: 0;
    }
    .content {
      padding: 32px;
    }
    .contact-info {
      background: #f1f5f9;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 24px;
    }
    .info-row {
      display: flex;
      margin-bottom: 12px;
      align-items: flex-start;
    }
    .info-label {
      font-weight: 600;
      width: 120px;
      flex-shrink: 0;
      color: #475569;
    }
    .info-value {
      flex: 1;
    }
    .message-section {
      margin-top: 24px;
    }
    .message-label {
      font-weight: 600;
      margin-bottom: 8px;
      color: #475569;
    }
    .message-content {
      background: #f8fafc;
      border-left: 4px solid #BD9A68;
      padding: 16px;
      border-radius: 0 8px 8px 0;
      white-space: pre-line;
    }
    .footer {
      text-align: center;
      color: #9ca3af;
      font-size: 12px;
      padding: 20px;
      border-top: 1px solid #e2e8f0;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <!-- ✅ Centered logo using table and inline styles for full compatibility -->
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center">
            <img
              src="https://www.sedec.ma/layout/img/index/logo.png"
              alt="Sedec Logo"
              class="logo"
              style="display:block; margin:0 auto 16px auto; height:60px; width:65px;"
            />
          </td>
        </tr>
      </table>
      <h1 class="title">Nouvelle demande de contact</h1>
    </div>
    
    <div class="content">
      <div class="contact-info">
        <div class="info-row">
          <div class="info-label">Nom :</div>
          <div class="info-value">${nom}</div>
        </div>
        <div class="info-row">
          <div class="info-label">Prénom :</div>
          <div class="info-value">${prenom}</div>
        </div>
        <div class="info-row">
          <div class="info-label">Email :</div>
          <div class="info-value">${email}</div>
        </div>
        <div class="info-row">
          <div class="info-label">Téléphone :</div>
          <div class="info-value">${telephone}</div>
        </div>
        <div class="info-row">
          <div class="info-label">Société :</div>
          <div class="info-value">${societe || "—"}</div>
        </div>
        <div class="info-row">
          <div class="info-label">Intéressé par :</div>
          <div class="info-value">${interet}</div>
        </div>
      </div>
      
      <div class="message-section">
        <div class="message-label">Message :</div>
        <div class="message-content">${message}</div>
      </div>
    </div>
    
    <div class="footer">
      © ${new Date().getFullYear()} Belfort Center. Tous droits réservés.
    </div>
  </div>
</body>
</html>
`;


    await sendEmail(
      "hassandahmouchi0@gmail.com",
      "Nouvelle demande de contact",
      emailContent
    );

    return { success: true };
  } catch (error) {
    console.error("Erreur lors de l’envoi du formulaire:", error);
    return { success: false, error: "Erreur lors de l’envoi du message." };
  }
}
