export async function POST(req: any) {
  let nodemailer = require("nodemailer");

  const params = await req.json();

  const endEmail = "marek.marszalek@onesta.com.pl";
  const fromEmail = process.env.FROM_EMAIL;
  const pass = process.env.EMAIL_PASS;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "mail-serwer141299.lh.pl",
    secure: true,
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      // type: "OAuth2",
      user: fromEmail,
      pass: pass,
    },
  });

  const mailData = {
    from: fromEmail,
    to: endEmail,
    subject: `Wiadomość ze strony od: ${params.name}`,
    text: "Hello. This email is for your email verification.",
    html:
      `Imię i nazwisko: ${params.name} ${params.lastName}` +
      `<br>` +
      `Email kontaktowy: ${params.email}` +
      `<br>` +
      `Telefon kontaktowy: ${params.phone}` +
      `<br>` +
      `Czy wysłać oferty? ${params.examples}` +
      `<br>` +
      `Termin przylotu: ${params.date}` +
      `<br><br>` +
      `Wiadomość: ${params.massege}` +
      `<br>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err: any, info: any) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
}
